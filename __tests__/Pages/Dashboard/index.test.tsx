import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render, screen} from '@testing-library/react';
import DashboardIndexPage from '@/pages/dashboard'

describe('Dashboard Page', ()=>{
    it('should render properly', ()=>{
        render (<DashboardIndexPage />)
        const header = screen.getByRole('heading')
        const headerText = 'Dashboard page';
        expect(header).toHaveTextContent(headerText)
    });
});