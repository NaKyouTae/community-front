import Link from "next/link";

const fetchMenus = async () => {
    const results = await fetch("https://jsonplaceholder.typicode.com/todos");
    const menus = await results.json()
    return menus
}

function NavigatorItem() {
    const menus = [
        { path: '/board', label: 'board'},
        { path: '/menu1', label: 'menu1'},
        { path: '/menu2', label: 'menu2'},
        { path: '/menu3', label: 'menu3'},
    ]

    const menus1 = fetchMenus()

    return (
        <ul>
            {menus.map((menu: any) => (
                <li key={menu.path}>
                    <Link href={menu.path}>{menu.label}</Link>
                </li>
            ))}
        </ul>
    )
}

export default NavigatorItem