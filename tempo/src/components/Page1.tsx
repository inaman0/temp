
        import React, { useState, useEffect } from 'react';
        import "./Page1.css";
        import { useNavigate } from 'react-router-dom';
        
            import CreateUser from './Resource/CreateUser';
            export default function Page1() {
          const navigate = useNavigate();

          return (
            <>
            <div className="d-flex flex-column border border-2 h-50" id="id-1"><CreateUser/></div>
            </>
          );
        }