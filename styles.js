import styled from 'styled-components/native';
import Constants from 'expo-constants'
import {Checkbox} from "react-native"
import { TouchableOpacity } from 'react-native-gesture-handler';
const statusbarHeight = Constants.statusBarHeight;
import habitColor from '/Users/anyakathpalia/Desktop/MSB/temp/LT/Daily'
import { DateTimePickerResult } from '@react-native-community/datetimepicker';

//COLORS
export const Colors = {
    primary: '#dcd0ff', // lavender
    secondary: '#d4f0f7', // blue
    tertiary: '#fefebe', // yellow
    quaternary: '#edffd3', //lime
    alternative: '#999999', // grey
    white: '#FFFFFF',
    beige: '#FFF7E2',
    black: '#000000',
    meditation: '#fac898'
}

//main Container
export const Container = styled.SafeAreaView `
    background-color: ${Colors.white};
    padding: 20px;
    padding-bottom: 0px;
    flex: 1;
    padding-top: ${statusbarHeight}px;
`

//Header COntent
export const HeaderView = styled.View `
    padding: 10px;
    height: 60px;
    background-color: ${Colors.beige}
    margin-bottom: 10px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const HeaderTitle = styled.Text `
    font-size: 20px;
    padding: 10px;
    font-weight: bold;
    color: ${Colors.alternative};
    letter-spacing: 2px;
    font-style: normal;
`

export const HeaderButton = styled.TouchableOpacity `
    padding-right: 20px;

`

// calendar content 
export const CalendarContainer= styled.View `
    padding = 4px;
`
// agenda cards 
export const EventCard = styled.TouchableOpacity `
    marginRight: 10 ;
    marginLeft: 10 ;
    marginTop: 17 ;
    top:5%;
    flexDirection: row;
    justifyContent: space-between;
    alignItems: center;
`

export const EventText = styled.Text `



`
export const AgendaView = styled.View `
    flex: 2;
`


//advice content 

export const AdviceText = styled.Text `
    font-size: 16px;
    letter-spacing: 1px;
    color: ${Colors.alternative};
`

export const AdviceButton = styled.TouchableOpacity`
    color: ${Colors.alternative};
    background-color: ${Colors.secondary};
    borderRadius:20;
    padding: 10px;
    justify-content: center;
    height: 100px;
    width: 400px;
`

// advice 
export const AdviceView = styled.TouchableHighlight `
    width: 500px;
    height: 180px;
    padding: 10px;
    justify-content: center;
    
    background:${Colors.beige};
    border-radius: 1px;
`
// Home Content 



// FocusHome

export const FHContainer= styled.View `
    flex: 1;
    padding-top: ${statusbarHeight+ 2}px;
    background-color: ${Colors.beige};
    justify-content: space-between;
    alignItems: center;
`
export const TimerContainer= styled.View `
    flex: 1;
    padding-top: ${statusbarHeight}px;
    background-color: ${(props) => props.color? props.color: Colors.secondary };
    justifyContent: flex-start;
    alignItems: center;
`
export const FHeaderView = styled.View `
    position: absolute;
    width: 90%;
    height: 80.25%;
    padding-left: 32px
    left: 1.11%;
    top: 18%;
    alignItems: center;
    alignSelf : center;
    background-color: ${Colors.beige};
    justifyContent= 'center';
    flex=1
`
export const TimerButtonContainer = styled.View `
    position: absolute;
    flexDirection: row;
    flex=1;
    width: 100%;
    height: 10%;
    padding: 10px
    top: ${(props) => props.top} %;
    justify-content: center;

`
//top: 30%;
export const TimerButton = styled.TouchableOpacity `
    width: 100px;
    margin: 10px;
    height: 60px;
    background-color: ${(props) => props.bgcolor? props.bgcolor: Colors.beige };
    borderRadius : 20; 
    justifyContent : center;
    alignItems: center;
    
`
export const TimerButtonText = styled.Text `
    font-size: 15px
    font-weight: bold;
    alignSelf : center;
    alignVertical = center;
    alignHorizontal = center;
    alignItems :center;
    color: ${Colors.alternative};
`

export const TimerInputContainer = styled.View `
    flex: 1;
    top: 80%;
    background-color: ${Colors.secondary};
    justify-content: space-between;
    alignItems: center;
`
export const TimerTextContainer = styled.View `
    flexDirection: row;
    justify-content: space-between;
    alignItems: center;
    borderRadius: 10 ;
    top: 60%;
    background-color: ${(props) => props.bgcolor? props.bgcolor: Colors.beige };
    padding: 10px;
`

export const TimerText = styled.Text `
    font-size: 15px
    font-weight: bold;
    alignSelf : center;
    alignVertical = center;
    alignHorizontal = center;
    alignItems :center;
    color: ${Colors.alternative};
`
export const FocusHeaderText = styled.Text `
    font-size: 40px;
    font-weight: bold;
    color: ${Colors.black};
    alignSelf : center;
    letter-spacing: 2px;
    font-style: normal; 
    justify-content: space-between;
    alignItems: center;
    justifyContent= 'center';
`
export const FocusBodyText = styled.Text `
    flexDirection: column;
    font-style: normal;
    font-size: 16px;
    alignSelf : center;
    justify-content: space-between;
    line-height: 23px;
    text-align: center;
    color: ${Colors.black};
    flexWrap= wrap;
    flexShrink=1;
`

export const Leaf = styled.Image `
    position: absolute;
    height:300px;
    width: 400px;
`
// Life Tracker contents 

// daily 

export const HabitContainer = styled.View`
    margin-bottom: 20px;
    flex: 1;
    padding-bottom: 30px;
`

export const HabitView = styled.TouchableOpacity`
    background-color: ${(props) => props.bgcolor? props.bgcolor: Colors.quaternary};
    min-height: 80px;
    width: 100%;
    padding: 20px;
    justify-content: space-around;
    margin-bottom: 15px;
    border-radius: 15px;
`

export const HabitText = styled.Text`
    font-size: 16px;
    letter-spacing: 1px;
    color: ${Colors.alternative};
`
export const ProgInput = styled.TextInput `
    width: 75px;
    height: 50px;
    background-color: ${Colors.beige};
    padding: 10px;
    font-size: 15px;
    margin: 10px;
    border-radius: 10px;
    left: 75%;
    color: ${Colors.alternative};    

`
export const StartDate = styled.Text`
    font-size: 10px;
    color: ${Colors.alternative};
    text-transform: uppercase;
    text-align: left;
`

export const HabitTrash = styled.TouchableOpacity `
    color: ${Colors.alternative};
    height: 20px;
    width:20px
    
`
export const InputColorButtonContainer = styled.View `
    min-height: 40px;
    width: 100%;
    flexDirection: row; 
    padding: 20px;
    justify-content: center;
    margin-bottom: 15px;
`
export const InputColorButton = styled.TouchableOpacity `
    height: 30 %; 
    width: 30px; 
    borderRadius: 50 ; 
    color: ${(props) => props.color}

`

// export const CheckboxButton = styled.Checkbox `
//     color: ${Colors.alternative};

// `

// Monthly 
export const MonthContainer = styled.View `
    background-color: ${Colors.white};
    padding-left: 10px;
    padding-right: 20px;
    padding-bottom: 0px;
    flex: 1;
    flexDirection: row;
    flex-wrap: wrap;
    padding-top: 40px;
`

export const HabitMapContainer = styled.View `
    padding-left: 0px;
    padding-right: 8px;
    padding-bottom: 0px;
    
`

export const DateView = styled.View `
    width: 90px ;
    background-color: ${Colors.white};

`
export const DayView = styled.View `
    width: 10%;
    flexDirection: column;
    background-color: ${Colors.beige};

`
export const DateText = styled.Text `
    padding-top: 8px;
    padding-right: 15px;
    padding-left: 15px;
    font-size: 20px;
    justify-content: center;
    color: ${Colors.alternative}

`
// to do content 

export const ListContainer = styled.View`
    maring-bottom: 20px;
    flex: 1;
    padding-bottom: 30px;
`

export const ListView = styled.TouchableHighlight`
    background-color: ${(props) => props.color? props.color: Colors.secondary};
    background-color: ${Colors.secondary};
    min-height: 80px;
    width: 100%;
    padding: 15px;
    justify-content: space-around;
    margin-bottom: 15px;
    border-radius: 15px;
`

export const TodoText = styled.Text`
    font-size: 16px;
    letter-spacing: 1px;
    color: ${(props)=> props.color? props.color: Colors.alternative};
`

export const TodoDate = styled.Text`
    font-size: 10px;
    color: ${Colors.alternative};
    text-transform: uppercase;
    text-align: right;
`
export const ListViewHidden = styled.View `
    background-color: ${Colors.alternative};
    min-height: 85px;
    width: 100%;
    padding: 15px;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 15px;
    border-radius: 15px;
`
export const HiddenButton = styled.TouchableOpacity`
    width: 55px;
    align-items: center;
`

//modal styling
export const ModelButton = styled.TouchableOpacity`
    width: 60px;
    height: 60px;
    background-color: ${Colors.meditation};
    border-radius: 50px;
    justify-content: center;
    align-items: center;
    align-self: center;
    position: absolute;
    bottom: 15px;    
`

export const ModelContainer = styled.View`
    padding: 20px;
    justify-content: flex-start;
    top: ${statusbarHeight +44}px;
    align-items: center;
    flex: 1;
    background-color: ${Colors.primary};
`

export const ModelContainer2 = styled.View`
    padding: 20px;
    height: 600px;
    justify-content: flex-start;
    background-color: ${Colors.primary};
`
export const ModelView = styled.View`
    background-color: ${Colors.secondary};
    border-radius: 20px;
    padding: 35px;
`

export const StyledInput = styled.TextInput`
    width: 300px;
    height: 50px;
    background-color: ${Colors.beige};
    padding: 10px;
    font-size: 16px;
    margin: 10px;
    border-radius: 10px;
    color: ${Colors.alternative};    
`


export const ModelAction = styled.TouchableOpacity`
    width: 60px;
    height: 60px;
    border-radius: 50px;
    justify-content: center;
    align-items: center;
    align-self: center;
    background-color: ${(props) => props.color};
`

export const ModelActionGroup = styled.View`
    flex-direction: row;
    justify-content: space-around;
    margin-top: 30px;
`

export const ModelIcon = styled.View`
    align-items: center;
    margin-bottom: 30px;
`

export const ToDoHeaderView = styled.View`
    padding-vertical: 10px;
    margin-bottom: 10px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

///////////////////// LOGINNNNN

export const LoginContainer = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: 30px;
    background-color: ${Colors.quaternary};
`

export const InnerContainer = styled.View`
    flex: 1;
    width:100%;
    align-items:center;
`

export const WelcomeContainer = styled(InnerContainer)`
    padding: 25px;
    padding-Top: 50px;
    justify-content: center;
`

export const MainContainer = styled(InnerContainer)`
    padding: 25px;
    justify-content: center;
`

export const Avatar = styled.Image`
    width; 50px;
    height: 50px;
    margin: auto;
    border-radius: 25px;
    border-width: 2px;
    border-color: ${Colors.secondary};
    margin-bottom: 10px;
    margin-top: 10px;
`

export const WelcomeImage = styled.Image`
    height: 50%;
    min-width: 100%;
`

export const PageLogo = styled.Image`
    width: 125px;
    height: 125px;
`

export const PageTitle = styled.Text`
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    color: ${Colors.black};
    padding: 10px;

    ${(props) => props.welcome && `
        font-size: 35px; 
    `}
`

export const MachineName = styled.Text`
    font-size: 24px;
    top:-120px;
    left: 60px;
    font-weight: bold;
    color: ${Colors.alternative};
    padding: 10px;
`

export const MacSubTitle = styled.Text`
    font-size: 15px;
    letter-spacing: 1px;
    font-weight: bold;
    color: ${Colors.tertiary}
`

export const SubTitle = styled.Text`
    font-size: 18px;
    letter-spacing: 1px;
    font-weight: bold;
    color: ${Colors.alternative}

    ${(props) => props.welcome && `
        
        font-weight: normal;
    `}
`

export const SubTitle1 = styled.Text`
    font-size: 18px;
    letter-spacing: 1px;
    font-weight: bold;
    color: ${Colors.primary}

    ${(props) => props.welcome && `
        
        font-weight: normal;
    `}
`
export const StyledFormArea = styled.View`
    width: 90%;
`

export const CardContainer = styled.View`
    flexDirection: row;
    flex: 1;
    width: 100%;
    padding: 25px;
    margin-top: -50px;
`


export const Card = styled.View`        
    flex: 1;
    margin-top: 20px;
    padding: 8px;
    align-items: center;
    margin-bottom: 10px;
`

export const ParamCard = styled.View`
    flex: 1;
    padding: 5px;
    margin-left: 10px;
    backgroundColor: ${Colors.secondary};
    border-radius: 10px;
    margin-top: 50px;
    elevation: 8;
    align-items: center;
`

export const CardHeading = styled.Text`
    font-size: 18px;
    letter-spacing: 1px;
    font-weight: bold;
    color: ${Colors.alternative}
` 

export const CardSubHeading = styled.Text`
    font-size: 18px;
    color: ${Colors.alternative}
` 

export const ParamHeading = styled.Text`
    font-size: 15px;
    fontWeight: bold;
    color: ${Colors.secondary}
`

export const MainHeading = styled.Text`
    font-size: 25px;
    fontWeight:bold;
    margin-left: 20px;
    color:${Colors.secondary};
`

export const ParamSubHeading = styled.Text`
    font-size: 15px;
    color: ${Colors.secondary}
`

export const StyledTextInput = styled.TextInput`
    background-color: ${Colors.secondary};
    padding: 15px;
    padding-left: 55px;
    padding-right: 55px;
    border-radius: 5px;
    font-size: 16px;
    height: 60px;
    margin-vertical: 3px;
    margin-bottom: 10px;
    color: ${Colors.alternative};
`

export const StyledInputLabel = styled.Text`
    color: ${Colors.alternative};
    font-size: 13px;
    text-align: left;
`

export const LeftIcon = styled.View`
    left: 15px;
    top: 33px;
    position: absolute;
    z-index: 1;
` 

export const MachineIcon = styled.View`
    left: 20px;
    top: -70px;
    position: relative;
    z-index: 1;
`


export const RightIcon = styled.TouchableOpacity`
    right: 15px;
    top: 33px;
    position: absolute;
    z-index: 1;
`

export const BackgroundImage = styled.Image`
    flex: 1;
    resizeMode: 'cover';
    justifyContent: 'center';
`

export const StyledButton = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${Colors.alternative};
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-vertical: 5px;
    height: 60px;

    ${(props) => props.google == true && `
        background-color: ${green};
        flex-direction: row;
        justify-content: center;
    `}
`

export const StyledButton4 = styled.TouchableOpacity`
    padding: 5px;
    background-color: ${Colors.alternative};
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-vertical: 5px;
    height: 30px;

    ${(props) => props.google == true && `
        background-color: ${Colors.quaternarys};
        flex-direction: row;
        justify-content: center;
    `}
`

export const StyledButton1 = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${Colors.primary};
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-vertical: 5px;
    height: 60px;

    ${(props) => props.google == true && `
        background-color: ${Colors.quaternary};
        flex-direction: row;
        justify-content: center;
    `}
`

export const ButtonText = styled.Text`
    color: ${Colors.primary};
    font-size: 20px;
    font-weight: bold;

    ${(props) => props.google == true && `
        padding: 25px;

    `}
`

export const ButtonText1 = styled.Text`
    color: ${Colors.alternative};
    font-size: 20px;
    font-weight: bold;

    ${(props) => props.google == true && `
        padding: 25px;
    `}
`
  

export const MsgBox = styled.Text`
    text-align: center;
    font-size: 13px;
    color: ${(props => props.type == '1' ? '#00FF00' : '#FF0000')}
`

export const Line= styled.View`
    height: 1px;
    width: 100%;
    background-color: ${Colors.alternative};
    margin-vertical: 2px;
`

export const ExtraView = styled.View`
    justify-content: center;
    flex-direction: row;
    align-items: center;
    padding: 10px;
`

export const ExtraText = styled.Text`
    justify-content: center;
    align-content: center;
    color: ${Colors.tertiary};
    font-size: 15px;
`

export const TextLink = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
`

export const TextLinkContent = styled.Text`
    color: ${Colors.alternative};
    font-size: 15px;
    margin-left: 2px;
`