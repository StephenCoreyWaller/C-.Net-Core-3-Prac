import React from "react";
import {Menu , Container, Button} from "semantic-ui-react"

interface IProps {
    CreateActivity: () => void; 
}

export const NavBar: React.FC<IProps> = ({CreateActivity}) => {
  return (
      <Menu fixed='top' inverted>
          <Container>
              <Menu.Item header>
                  <img style={{ marginRight : '10px' }} src='/assets/logo.png' alt='logo'/>
                  Reactivities
              </Menu.Item>
              <Menu.Item name='Activities' />
              <Menu.Item>
                    <Button onClick={() => {CreateActivity()}}
                        positive>Create Activity
                    </Button>
              </Menu.Item>
          </Container>
      </Menu>
    );
};
export default NavBar