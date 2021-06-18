import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import AcUnitIcon from "@material-ui/icons/AcUnit";

const Header = ({ currentUser, setCurrentUser }) => {
  return (
    <div>
      <AppBar
        position="static"
        className="bg-dark text-white"
        style={{ height: 65 }}
      >
        <Toolbar>
          <AcUnitIcon className="mr-1" />
          Student Registration Portal
          <span className="ml-auto">
            {currentUser && (
              <Button
                variant="contained"
                size="small"
                color="secondary"
                onClick={() => setCurrentUser(null)}
              >
                Logout
              </Button>
            )}
          </span>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
