import React from "react";
import {Menu , Container, Button} from "semantic-ui-react"


export const NavBar = () => {
  return (
      <Menu fixed='top' inverted>
          <Container>
              <Menu.Item header>
                  <img style={{ marginRight : '10px' }} src='/assets/logo.png' alt='logo'/>
                  Reactivities
              </Menu.Item>
              <Menu.Item name='Activities' />
              <Menu.Item>
                    <Button positive>Create Activity</Button>
              </Menu.Item>
          </Container>
      </Menu>
    );
};
export default NavBar