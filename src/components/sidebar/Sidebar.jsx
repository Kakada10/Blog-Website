import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://images.unsplash.com/photo-1611832822637-0d6246524c50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident veniam beatae suscipit commodi a modi, iste, molestiae laudantium ea, minus ullam voluptatum. Perferendis deleniti provident necessitatibus, laboriosam eveniet accusamus sapiente!
          Ullam, vel unde. Voluptatibus omnis voluptas odio minima laudantium. Suscipit placeat saepe praesentium dolores, corporis ratione nulla amet porro delectus a deserunt. Maxime obcaecati at architecto quasi ut pariatur itaque.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Sport</li>
            <li className="sidebarListItem">Tech</li>
            <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
        <i class="sidebarIcon fa-brands fa-square-facebook"></i>
        <i class="sidebarIcon fa-brands fa-square-twitter"></i>
        <i class="sidebarIcon fa-brands fa-square-pinterest"></i>
        <i class="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  );
}
