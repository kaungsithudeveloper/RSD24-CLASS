export default function CheckList({list}) {
    return (
        <ul>
            {list.map(item => {
                return <li key={item._id}>
                    {item.subject}
                </li>
            })}
        </ul>
    )
}