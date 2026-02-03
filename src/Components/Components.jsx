import Authorize from "./LoginSignUp/Index";
import AdminDash from "./Admin/Index";
import UserDash from "./Dashboard";

function Components() {
    return (
        <div>
             <Authorize />
             <AdminDash />
             <UserDash />
        </div>
        
    );
    
}
export default Components;