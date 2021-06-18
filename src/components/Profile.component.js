import React from "react";
import { Card, CardContent, CardHeader } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const Profile = ({ currentUser, setCurrentUser }) => {
  let dataFields = [
    { name: "Previous Class", value: "previous_class" },
    { name: "Session", value: "session" },
    { name: "year", value: "year" },
    { name: "Current Class", value: "current_class" },
    { name: "Current Session Year", value: "current_session_year" },
  ];
  const updateProfilePic = (e) => {
    let pic = e.target.files[0];
    if (!pic) return;
    console.log(pic);
    currentUser["avatar"] = pic;
    setCurrentUser({ ...currentUser });
  };
  const handleFormChanges = (e) => {
    currentUser[e.target.name] = e.target.value;
    setCurrentUser({ ...currentUser });
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center mb-5"
      style={{
        height: "calc(100vh - 65px)",
        marginTop: "65px",
      }}
    >
      <Card
        style={{
          width: "90%",
        }}
      >
        <CardHeader
          className="bg-primary text-light text-center"
          title="Profile Manager"
        />
        <CardContent>
          <div className="row mx-0">
            <div className="col-md-6 bg-white rounded shadow-sm my-1 p-2">
              <div className="my-2 text-center">
                <img
                  src={
                    currentUser.avatar
                      ? URL.createObjectURL(currentUser.avatar)
                      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ75yfh1ISKmb8seljQCOS4bLnTAOV79iGZgUJ7g289IhQY6dAiWNgN0OOPIrnStoki30g&usqp=CAU"
                  }
                  alt="profile_pic"
                  height="100px"
                  width="100px"
                  style={{ objectFit: "cover" }}
                  className="rounded-circle shadow-sm border"
                />
              </div>
              <h6 className="my-2 text-center">{`${currentUser.first_name} ${currentUser.last_name}`}</h6>
              <List component="nav" aria-label="main mailbox folders">
                {dataFields.map((item, i) => (
                  <ListItem
                    id={i}
                    className="bg-dark my-1 text-light rounded-lg "
                  >
                    <ListItemText primary={item.name + " :"} />
                    <ListItemText
                      className="text-right"
                      primary={
                        currentUser[item.value] ? (
                          currentUser[item.value]
                        ) : (
                          <span className="text-muted">Not added</span>
                        )
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </div>
            <div className="col-md-6 bg-white rounded shadow-sm my-1 p-2">
              <h5>Update your profile</h5>

              <div className="row mx-0">
                <div className="col-6 bg-light rounded my-2 shadow-sm">
                  <TextField
                    size="small"
                    type="text"
                    label="First Name"
                    name="first_name"
                    value={currentUser.first_name}
                    className="w-100 m-1"
                    variant="outlined"
                    onChange={handleFormChanges}
                  />
                </div>
                <div className="col-6 bg-light rounded my-2 shadow-sm">
                  <TextField
                    size="small"
                    type="text"
                    label="Last Name"
                    name="last_name"
                    value={currentUser.last_name}
                    className="w-100 m-1"
                    variant="outlined"
                    onChange={handleFormChanges}
                  />
                </div>
                <div className="col-12 bg-light my-2 rounded shadow-sm">
                  <h6 className="mt-2 mb-0">Profile Picture</h6>
                  <TextField
                    size="small"
                    type="file"
                    name="avatar"
                    onChange={updateProfilePic}
                    className="w-100 m-1"
                    variant="outlined"
                    accept="image/gif, image/jpeg, image/png"
                  />
                </div>
                {dataFields.map((item, i) => (
                  <>
                    <div className="col-12 bg-light rounded my-2 shadow-sm py-1">
                      <TextField
                        size="small"
                        type="text"
                        label={item.name}
                        name={item.value}
                        value={currentUser[item.value]}
                        className="w-100 m-1"
                        variant="outlined"
                        onChange={handleFormChanges}
                      />
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
