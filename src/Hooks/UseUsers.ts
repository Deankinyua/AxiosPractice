import { useEffect, useState } from "react"
import UserService, { Users } from "../Services/User-service"
import { CanceledError } from "axios"

const UseUsers = () => {
    const [users, setUsers] = useState<Users[]>([])
    const [isLoading, setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        setLoading(true)
        const {request, cancel} = UserService.getEntities<Users>();

        request.then((response) => {
            setUsers(response.data)
            setLoading(false)
        }).catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message);
            setLoading(false);
        })

        return () => cancel();
     
    }, [])

    return { users, error, isLoading, setError, setUsers };

}

export default UseUsers;

