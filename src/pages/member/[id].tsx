import { useRouter } from 'next/router'

export const User = () => {

    const router = useRouter();
    const { id } = router.query;

    return <p>ようこそ！{id}さん</p>
}

export default User