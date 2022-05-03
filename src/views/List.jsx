import React from 'react'
import { useEffect, useState } from 'react'
import { Link, useLocation, useHistory } from 'react-router-dom'
import styles from '../App.css'

export default function List(){
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const history = useHistory();
    
}


