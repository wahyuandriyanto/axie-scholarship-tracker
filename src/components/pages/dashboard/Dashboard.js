import React, { useState, useEffect } from 'react';
import BottomNav from 'components/molecules/bottom-nav/BottomNav';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout } from 'utils/firebaseConfig';
import { StyledDashboard } from './Styled';
import TotalEarningSlp from 'components/organisms/dashboard/TotalEarningSlp';


const Dashboard = () => {
    const [user, loading] = useAuthState(auth);
    const [name, setName] = useState('');
    const fetchUserName = async () => {
        try {
            const query = await db
                .collection("users")
                .where("uid", "==", user?.uid)
                .get();
            const data = await query.docs[0].data();
            setName(data.name);
        } catch (err) {
            console.error(err);
            alert("An error occured while fetching user data");
        }
    };
    useEffect(() => {
        if (loading) return;
        fetchUserName();
    }, [loading])

    return (
        <StyledDashboard>
            <div className="dash-header">
                Welcome <span>{name}</span>
            </div>
            <TotalEarningSlp />
            <BottomNav />
        </StyledDashboard>
    )
}

export default Dashboard
