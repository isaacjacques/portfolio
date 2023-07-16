//import React, { useState, useEffect } from 'react';
import leetcodeStats from './leetcodeStats.json';

const HeaderSubtitle = () => {
    let lastRank = null;
    if (leetcodeStats && leetcodeStats.length > 0) {
        lastRank = leetcodeStats[leetcodeStats.length-1].rank;
    }

    return (
    <div className="text-lg mb-8 text-isabelline-100 italic"> 
        {lastRank ? (<a className="hover:text-rosequartz-400" href="https://leetcode.com/isaacjacques/">Ranked {lastRank} on leetcode</a>) : (<p>"I build things."</p>)}
    </div>
  );
};
  
export default HeaderSubtitle;