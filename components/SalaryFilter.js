import React from 'react';

const SalaryFilter = ({ onSalaryChange }) => {
  return (
    <div>
      <p className="para1">Salary</p>
      <div>
        <input 
          type="radio" 
          id="radio7" 
          name="sal" 
          value="" 
          onChange={onSalaryChange}
        />
        <label htmlFor="radio7">Any</label><br />
        <input 
          type="radio" 
          id="radio8" 
          name="sal" 
          value="30000" 
          onChange={onSalaryChange}
        />
        <label htmlFor="radio8">30K</label><br />
        <input 
          type="radio" 
          id="radio9" 
          name="sal" 
          value="50000" 
          onChange={onSalaryChange}
        />
        <label htmlFor="radio9">50K</label><br />
        <input 
          type="radio" 
          id="radio10" 
          name="sal" 
          value="80000" 
          onChange={onSalaryChange}
        />
        <label htmlFor="radio10">80K</label><br />
        <input 
          type="radio" 
          id="radio11" 
          name="sal" 
          value="100000" 
          onChange={onSalaryChange}
        />
        <label htmlFor="radio11">100K</label><br />
      </div>
    </div>
  );
};

export default SalaryFilter;
