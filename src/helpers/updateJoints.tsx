import { getJoints } from "../state/actions/jointsActions";

const updateJoints = async (loggedUser: any, setModalIsShown: (boolean: boolean) => void, postId: string, setMessage: (message: string) => void, setError: (error: string) => void, dispatch: any, jointsScore: number, setJointsScore: (num: number) => void) => {
    if(loggedUser) {
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