function Mydata({ userData }) {
  console.log(userData);
  return (
    <>
      <div>
        <h1>
          {userData.first_name}
          {userData.last_name}{" "}
        </h1>
        <p>{userData.gender}</p>
        <p>{userData.email}</p>
        <button className="edit-profile">Edit profile</button>
      </div>
    </>
  );
}
export default Mydata;
