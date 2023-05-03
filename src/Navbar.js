import "./App.css";
export default function NavBar(){
    return( <nav className="nav">
        <a href = "/" className="Home">Tiger Tutors</a>
        <ul>
            <CustomLink href="/Login">Login</CustomLink>
            <CustomLink href="/Appointments">Appointments</CustomLink>
            <CustomLink href="/Messages">Messages</CustomLink>
            <CustomLink href="/Users">Tutors</CustomLink>
            <CustomLink href="/Profile">Profile</CustomLink>
        </ul>
    </nav>
    )
}

function CustomLink({href, children, ...props}){
    const path = window.location.pathname
    return(
        <li className = {path === href ? "active" : ""}>
            <a href={href} {...props}>
                {children}</a>
        </li>
    )

}