const loadPhone = async(searchText) =>{
    const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await response.json();
    const phones = data.data;
    displayPhones(phones);
}
const displayPhones = phones =>{
    // console.log(phones);
    const phonesContainer = document.getElementById('phone-container');
    phonesContainer.textContent ='';
    showButtonContainer = document.getElementById('show-button-conatiner');
    if(phones.length > 12 ){
        showButtonContainer.classList.remove('hidden');
    }
    else{
        showButtonContainer.classList.add('hidden');
    }
    phones = phones.slice(0,12);
    phones.forEach(phone => {
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-base-100 w-96 shadow-xl `;
        phoneCard.innerHTML = `
        <figure class="px-10 pt-10">
            <img
            src="${phone.image}"
            alt="Shoes"
            class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions">
            <button onclick ="showDetailsButton('${phone.slug}')"; class="btn btn-secondary">Show Details</button>
            
            </div>
        </div>
        `;
        phonesContainer.appendChild(phoneCard);
        
    });
    loadingSpinner(false);
}
const showDetailsButton = async (phoneId) =>{
    // console.log('show details clicked',phoneId);
    const response = await fetch(`https://openapi.programming-hero.com/api/phone/${phoneId}`)
    const data = await response.json();
    const singlePhoneData = data.data
    showPhoneDetais(singlePhoneData);

} 
const showPhoneDetais = (singlePhoneData)=>{
    phone_details_modal.showModal();
    console.log(singlePhoneData);
    const phoneName = document.getElementById('show-details-phone-name');
    phoneName.innerText = singlePhoneData.name;
    const showDetaisContainer = document.getElementById('show-detais-container');
    showDetaisContainer .innerHTML = `
    <img  src="${singlePhoneData.image}" alt="" srcset="">

    <p><span><b>Storage : </b></span>${singlePhoneData.mainFeatures?.storage}</p>
    <p><span><b>Display Size : </b></span>${singlePhoneData.mainFeatures?.displaySize}</p>
    <p><span><b>Chipset : </b></span>${singlePhoneData.mainFeatures?.chipSet}</p>
    <p><span><b>Memory : </b></span>${singlePhoneData.mainFeatures?.memory}</p>
    <p><span><b>Slug : </b></span>${singlePhoneData.slug}</p>
    <p><span><b>Realese Date : </b></span>${singlePhoneData.releaseDate}</p>
    <p><span><b>Band : </b></span>${singlePhoneData?.brand}</p>
    <p><span><b>GPS : </b></span>${singlePhoneData?.others?.GPS}</p>

    `;

}
const searchPhone = () =>{
    loadingSpinner(true);
    const searchField = document.getElementById('input-field');
    const searchText =searchField.value;
    loadPhone(searchText);
}
const loadingSpinner = (isLoading) =>{
    const loading = document.getElementById('loading-spinner');
    if(isLoading){
        loading.classList.remove('hidden');
    }
    else{
        loading.classList.add('hidden');
    }
}

loadPhone();