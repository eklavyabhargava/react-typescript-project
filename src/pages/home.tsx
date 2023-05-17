import PostTable from '../components/postTable';
import CheckboxGroup from '../components/checkBox'

function Home() {

    // check for userInfo in localstorage
    const userInfo = localStorage.getItem('userInfo');

    // if not userInfo, redirect user to login page
    if (!userInfo) {
        window.location.href = '/';
    }

    return (
        <>
            <CheckboxGroup />
            <PostTable />
        </>
    )
}

export default Home;