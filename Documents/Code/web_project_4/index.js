const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseButton = editProfileModal.querySelector(".modal__close-button");

editProfileCloseButton.addEventListener("click",() => {
    editProfileModal.classList.remove("modal__open");
})

OpenModalButton.addEventListener("click",() => {
    editProfileModal.classList.add("modal__open");
})

editProfileModal.addEventListener("click",(e) => {

})