import { getJoints } from "../state/actions/jointsActions";

/* It just a function which will be triggered on Post Component */
/* When user clicks on 'light a joint' on post to give a score - function will be triggered*/
/*It updates joints (score) on post and on user and it triggers getJoints redux action which fetches available user joints and rerenders TopBar Component to show that updated information*/
const updateJoints = async (loggedUser: any, setModalIsShown: (boolean: boolean) => void, postId: string, setMessage: (message: string) => void, setError: (error: string) => void, dispatch: any, jointsScore: number, setJointsScore: (num: number) => void, availableUserJoints: number) => {
    if(loggedUser) {
        //Checking if user has available joints
        if (availableUserJoints < 1) {
            setModalIsShown(true);
            setError("W tej chwili nie masz dostępnych jointów do przypalenia. Zostaną odnowione kolejnego dnia!");
            setTimeout(() => {
                setModalIsShown(false);
                setMessage("");
                setError("");
            }, 4000);
            return;
        }
        /**************************************** */
        setModalIsShown(true);
        const res = await fetch(`${process.env.REACT_APP_API}/posts/lightjoint`, {
            method: "PATCH",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'authorization': `Bearer ${loggedUser.token}`
              },
            body: JSON.stringify({
                postId
            })
        });
        const data = await res.json();
        if (res.ok) {
            setMessage("Właśnie przypaliłeś jointa!");
            setTimeout(() => {
                setModalIsShown(false);
                setMessage("");
                setError("");
            }, 3000);
            dispatch(getJoints(loggedUser._id))
            setJointsScore(jointsScore + 1);
        } else {
            setError(data.message);
            setTimeout(() => {
                setModalIsShown(false);
                setMessage("");
                setError("");
            }, 3000);
        }
    } else {
        setModalIsShown(true);
        setError("Tylko zalogowani użytkownicy mogą przypalać jointy. Zaloguj się i przypal ;)");
        setTimeout(() => {setModalIsShown(false)}, 3000)
    }
};

export default updateJoints;