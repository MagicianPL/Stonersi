import { showModal, setModalError, setModalMessage } from '../state/actions/modalActions';

const createNewPost = (post: {}, user: any = undefined) => async (dispatch: any) => {
    //Show loading modal
    showModal();

    const res =  await fetch(`${process.env.REACT_APP_API}/posts/newpost`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'authorization': user ? `Bearer ${user.token}` : ""
        },
        body: JSON.stringify({post})
    });

    const data = await res.json();

    if (!res.ok) {
        //Show error on modal
        setModalError(data.message);
    } else {
        //Show success message on modal
        setModalMessage("Twój post czeka na zaakceptowanie przez moderatora");
    };
};

export default createNewPost;