import { useUser } from "../context-providers/UserProvider"

export default function UserProfile(props) {
    const user = useUser();
    return (
        <div>
            {user.username}
        </div>
    )
}