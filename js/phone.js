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
}
const searchPhone = () =>{
    const searchField = document.getElementById('input-field');
    const searchText =searchField.value;
    console.log(searchText);
    loadPhone(searchText);

}

