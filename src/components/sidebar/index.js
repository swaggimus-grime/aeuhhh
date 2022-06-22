import {SBContainer, XIcon, Icon, SBMenu, SBLink} from './styles'
import play from '../sound'

export default function Sidebar({isOpen, toggle}) {
    const toggleAndPlay = () => {toggle(); play();};
    return (
        <SBContainer isOpen={isOpen} onClick={toggleAndPlay}>
            <Icon onClick={toggleAndPlay}>
                <XIcon />
            </Icon>
            <SBMenu>
                <SBLink to='aeuhhh' onClick={toggleAndPlay}>
                    AEUHHH
                </SBLink>
                <SBLink to='aeuhhh' onClick={toggleAndPlay}>
                    AEUHHH
                </SBLink>
                <SBLink to='aeuhhh' onClick={toggleAndPlay}>
                    AEUHHH
                </SBLink>
            </SBMenu>
        </SBContainer>
    );
}