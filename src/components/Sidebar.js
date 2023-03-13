import '../css/sidebar.css'
import img_profile from '../outils/assets/img/about/2.jpg'
function fn(){
    document.querySelector("#header").classList.toggle("animm") ; 
  }
const Sidebar = () => {
    return ( 
    

      
        <header id="header">
        <i class="bi bi-list mobile-nav-toggle d-xl-none" onClick={fn}></i>


          <div class="d-flex flex-column">
      
            <div class="profile">
              <img src={img_profile} alt="" class="img-fluid rounded-circle"/>
              <h1 class="text-light"><a href='#'>Amir Maalaoui</a></h1>
          
            </div>
      
            <nav id="navbar" class="nav-menu navbar">
              <ul>
                <li><a href='/home' class="nav-link scrollto active"><i class="bx bx-home"></i> <span>Home</span></a></li>
                <li><a href="#about" class="nav-link scrollto"><i class="bx bx-user"></i> <span>Exams</span></a></li>
                <li><a href="#skills" class="nav-link scrollto"><i class="bx bx-user"></i> <span>Series</span></a></li>
                <li><a href="#sumarry" class="nav-link scrollto"><i class="bx bx-file-blank"></i> <span>Videos</span></a></li>
                <li><a href="#education" class="nav-link scrollto"><i class="bx bx-book-content"></i> <span>Followers</span></a></li>
                <li><a href="#internship" class="nav-link scrollto"><i class="bx bx-server"></i> <span>Statistiques</span></a></li>
                <li><a href="#freelance" class="nav-link scrollto"><i class="bx bx-server"></i> <span>Log out</span></a></li>
              </ul>
            </nav>
          </div>
        
        </header>
        
     );
}
 
export default Sidebar;