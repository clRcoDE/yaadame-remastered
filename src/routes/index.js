

import {createAppContainer , createSwitchNavigator , createStackNavigator , createDrawerNavigator} from 'react-navigation'

import { View , Text , Dimensions} from 'react-native'
const dim = Dimensions.get('window')
import About from '../pages/About'
import Loading from '../pages/Loading'
import Lists from '../pages/Lists'
import Setting from '../pages/Settings'
import Items from '../pages/Items'
import Introduce from  '../pages/Introduce'
import  CustomDrawer from '../components/CustomeDrawer'




const ListsStack = createStackNavigator(
    {
        ListsPath:Lists,
        ItemScreen:Items
    },
    {
        mode:'modal',
        headerMode:'none'
    }
)



const HomeDrawerStack = createDrawerNavigator(
    {
        About:About,
        Setting:Setting,
        Lists:ListsStack
    },{
        
        backBehavior:'initialRoute',
        initialRouteName:'Lists',
        contentComponent: CustomDrawer,
        drawerWidth:dim.width*(70/100)
    }
)



const  AuthStack = createSwitchNavigator(
    {
        Introduce:Introduce,
        Home:HomeDrawerStack
    },{
        initialRouteName:'Home'
    }
)


const AppSwitchNavigator = createSwitchNavigator(
    {
        LoadingPage:Loading,
        Auth:AuthStack
    },{
        initialRouteName:'LoadingPage'
    }

)


export default createAppContainer(AppSwitchNavigator)