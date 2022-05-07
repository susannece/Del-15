import React, {useState} from "react";

const DataTable = () => {
    const initValue = [
        {
            id: 1,
            firstName: "David",
            lastName: "Svensson",
            birthdate: "20200202",
            age: 2
        },
        {
            id: 2,
            firstName: "Adam",
            lastName: "Svensson",
            birthdate: "20200202",
            age: 2
        },
        {
            id: 3,
            firstName: "Peter",
            lastName: "Svensson",
            birthdate: "20200202",
            age: 2
        },
        {
            id: 4,
            firstName: "Lisa",
            lastName: "Svensson",
            birthdate: "20200202",
            age: 2
        },
    ]

    const [studentList, setStudentList] = useState(initValue);
    const [student, setStudent] = useState({id: 0, firstName: '', lastName: '', birthdate: '', age: 0})
    const [showDetails, setShowDetails] = useState(false)

    const TableHeader = () =>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Action</th>
                </tr>
            </thead>
    

  /*   function TableHeader() {
        return (
            <thead>
                <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Action</th>
                </tr>
            </thead>
        );
    } */

    const TableRow = (props) => {
        const list = props.studentData
        const rows = list.map((student) =>{
            return(
                <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.firstName}</td>
                    <td>{student.lastName}</td>
                    <td>{student.age}</td>
                    <td><TableAction studentData={student} /></td>
                </tr>
            );
        })
        return <tbody>{rows}</tbody>
    } 

/* const TableRow = (props) => {
    const tableRows = props.studentData
    return(
        <tbody>
            {
                tableRows.map((student) => {
                    const row =
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.age}</td>
                        </tr>
                    return row;
                })
            }
        </tbody>
    )
} */

    const TableAction = (props) => {
        const actionData = () => {
            setStudent(props.studentData);
            setShowDetails(true)
        }
        return(<button onClick={actionData}>Details</button>)
    }

    const ShowStudentDetails = () => {
        return (
        showDetails ?       // if(showDetails == true)
            <div>
                <p><b>Student information</b></p>
                <p>ID: {student.id}</p>
                <p>Name: {student.firstName} {student.lastName}</p>
                <p>Birthdate: {student.birthdate}</p>
                <button onClick={()=>{setStudent({}); setShowDetails(false)}}>Hide</button>
            </div>
            :
        <React.Fragment />
        )
    }
 
    return(
        <div className="container">
            <h2>List of students</h2>
        <table>
            <TableHeader />
            <TableRow studentData={studentList} /> 
        </table>
        <ShowStudentDetails student={student} />
        </div>
    );

};

export default DataTable