
        import React, { useState, useEffect } from 'react';
        import "./Page2.css";
        import { useNavigate } from 'react-router-dom';
        
            import ReadUser from './Resource/ReadUser';
            export default function Page2() {
          const navigate = useNavigate();

          return (
            <>
            <div className="d-flex flex-column border border-2 h-50" id="id-3"><ReadUser/></div>
            </>
          );
        }