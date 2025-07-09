package /Users/namanpandya/Desktop/rasp_backend/src/main/java/com/rasp/app;
import platform.helper.HelperManager;
import platform.webservice.ServiceManager;
import /Users/namanpandya/Desktop/rasp_backend/src/main/java/com/rasp/app.helper.*;
import /Users/namanpandya/Desktop/rasp_backend/src/main/java/com/rasp/app.service.*;
public class Registry {
		public static void register(){
				 HelperManager.getInstance().register(UserHelper.getInstance());
				 ServiceManager.getInstance().register(new UserService());
		}
}
