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
        console.log(phone)
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
            <button class="btn btn-secondary">Show Details</button>
            </div>
        </div>
        `;
        phonesContainer.appendChild(phoneCard);
        
    });
    loadingSpinner(false);
}
const searchPhone = () =>{
    loadingSpinner(true);
    const searchField = document.getElementById('input-field');
    const searchText =searchField.value;
    console.log(searchText);
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

