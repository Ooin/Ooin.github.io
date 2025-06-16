import avatarPic from "./../assets/images/avatars/avatar.jpg";

const Header = () => {
    return (


        <aside className="w-64 bg-gray-800 text-white p-4 h-screen flex">
            <div className="">
                <a href="#" className="image avatar">
                    <img src={avatarPic} alt="" />
                </a>
                <h1>
                    Hi! I'm <strong>Marc Anglés</strong>,<br />
                    aspiring Game Developer, <br />
                    board game aficionado, maker & inline skater.
                </h1>
            </div>
        </aside>
    );
};

export default Header;
