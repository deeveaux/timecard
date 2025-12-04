import { useState, useEffect } from 'react';

export default function TimeCard() {
  const [currentDate, setCurrentDate] = useState('');
  const [name, setName] = useState('');
  const [jobSite, setJobSite] = useState('');
  const [timeIn, setTimeIn] = useState('07:00');
  const [timeOut, setTimeOut] = useState('15:30');
  const [notes, setNotes] = useState('');
  const [hours, setHours] = useState(8.5);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const now = new Date();
    const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
    setCurrentDate(now.toLocaleDateString('en-US', options).toUpperCase());
  }, []);

  useEffect(() => {
    calculateHours();
  }, [timeIn, timeOut]);

  const calculateHours = () => {
    if (!timeIn || !timeOut) {
      setHours(0);
      return;
    }
    const [inHour, inMin] = timeIn.split(':').map(Number);
    const [outHour, outMin] = timeOut.split(':').map(Number);
    let totalMinutes = (outHour * 60 + outMin) - (inHour * 60 + inMin);
    if (totalMinutes < 0) totalMinutes += 24 * 60;
    setHours(Math.round((totalMinutes / 60) * 10) / 10);
  };

  const setQuickTime = (start, end) => {
    setTimeIn(start);
    setTimeOut(end);
  };

  const handleSubmit = () => {
    if (!name.trim()) {
      setError('Please enter your name');
      return;
    }
    if (!jobSite) {
      setError('Please select a job site');
      return;
    }
    if (hours <= 0 || hours > 24) {
      setError('Please check your times');
      return;
    }
    
    setError('');
    setIsLoading(true);
    
    // Simulate submission delay
    setTimeout(() => {
      setIsLoading(false);
      setShowSuccess(true);
    }, 1000);
  };

  const resetForm = () => {
    setShowSuccess(false);
    setNotes('');
    setJobSite('');
  };

  const styles = {
    container: {
      fontFamily: "'Work Sans', -apple-system, sans-serif",
      background: '#1a1a1a',
      color: '#f5f5f5',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    },
    header: {
      background: 'repeating-linear-gradient(-45deg, #FFD100, #FFD100 20px, #1a1a1a 20px, #1a1a1a 40px)',
      padding: '4px 0',
    },
    headerInner: {
      background: '#1a1a1a',
      padding: '16px 20px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
    },
    logo: {
      fontFamily: "'Space Mono', monospace",
      fontSize: '1.5rem',
      fontWeight: 700,
      color: '#FFD100',
      letterSpacing: '-1px',
    },
    main: {
      flex: 1,
      padding: '24px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      maxWidth: '500px',
      margin: '0 auto',
      width: '100%',
    },
    dateDisplay: {
      background: '#2d2d2d',
      borderRadius: '12px',
      padding: '20px',
      textAlign: 'center',
      border: '2px solid #444',
    },
    label: {
      fontSize: '0.85rem',
      color: '#888',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      marginBottom: '8px',
    },
    dateValue: {
      fontFamily: "'Space Mono', monospace",
      fontSize: '1.4rem',
      fontWeight: 700,
      color: '#FFD100',
    },
    formSection: {
      background: '#2d2d2d',
      borderRadius: '12px',
      padding: '20px',
      border: '2px solid #444',
    },
    sectionLabel: {
      fontSize: '0.85rem',
      color: '#888',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      marginBottom: '12px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    labelBar: {
      width: '4px',
      height: '16px',
      background: '#FFD100',
      borderRadius: '2px',
    },
    input: {
      width: '100%',
      background: '#1a1a1a',
      border: '2px solid #444',
      borderRadius: '10px',
      padding: '18px 16px',
      fontSize: '1.2rem',
      fontFamily: "'Work Sans', sans-serif",
      color: '#f5f5f5',
      outline: 'none',
    },
    select: {
      width: '100%',
      background: '#1a1a1a',
      border: '2px solid #444',
      borderRadius: '10px',
      padding: '18px 16px',
      fontSize: '1.1rem',
      fontFamily: "'Work Sans', sans-serif",
      color: '#f5f5f5',
      cursor: 'pointer',
      appearance: 'none',
      backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23888'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E\")",
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right 12px center',
      paddingRight: '44px',
    },
    timeRow: {
      display: 'flex',
      gap: '12px',
      alignItems: 'center',
    },
    timeWrapper: {
      flex: 1,
    },
    timeInput: {
      width: '100%',
      background: '#1a1a1a',
      border: '2px solid #444',
      borderRadius: '10px',
      padding: '18px 16px',
      fontSize: '1.3rem',
      fontFamily: "'Space Mono', monospace",
      fontWeight: 700,
      color: '#f5f5f5',
      textAlign: 'center',
    },
    timeLabel: {
      display: 'block',
      textAlign: 'center',
      fontSize: '0.75rem',
      color: '#888',
      marginTop: '8px',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    separator: {
      fontSize: '1.5rem',
      color: '#888',
      fontWeight: 700,
    },
    quickBtn: {
      background: '#1a1a1a',
      border: '2px solid #444',
      color: '#f5f5f5',
      padding: '16px 12px',
      borderRadius: '10px',
      fontFamily: "'Work Sans', sans-serif",
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '4px',
    },
    hoursDisplay: {
      background: '#FFD100',
      color: '#1a1a1a',
      borderRadius: '12px',
      padding: '24px',
      textAlign: 'center',
    },
    hoursValue: {
      fontFamily: "'Space Mono', monospace",
      fontSize: '3rem',
      fontWeight: 700,
      lineHeight: 1,
    },
    hoursUnit: {
      fontSize: '1rem',
      opacity: 0.7,
      marginLeft: '4px',
    },
    textarea: {
      width: '100%',
      background: '#1a1a1a',
      border: '2px solid #444',
      borderRadius: '10px',
      padding: '16px',
      fontSize: '1rem',
      fontFamily: "'Work Sans', sans-serif",
      color: '#f5f5f5',
      resize: 'none',
      minHeight: '80px',
    },
    submitBtn: {
      background: '#FFD100',
      color: '#1a1a1a',
      border: 'none',
      borderRadius: '12px',
      padding: '24px',
      fontSize: '1.4rem',
      fontFamily: "'Work Sans', sans-serif",
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '2px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px',
      marginTop: 'auto',
      minHeight: '80px',
    },
    error: {
      background: '#ff4444',
      color: '#fff',
      padding: '16px',
      borderRadius: '10px',
      textAlign: 'center',
      fontWeight: 600,
    },
    successOverlay: {
      position: 'fixed',
      inset: 0,
      background: '#22c55e',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100,
    },
    successIcon: {
      fontSize: '5rem',
      marginBottom: '20px',
    },
    successText: {
      fontSize: '1.8rem',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '2px',
      color: '#1a1a1a',
    },
    successDetails: {
      marginTop: '12px',
      fontSize: '1.1rem',
      color: 'rgba(0,0,0,0.7)',
    },
    newEntryBtn: {
      marginTop: '40px',
      background: '#1a1a1a',
      color: '#f5f5f5',
      border: 'none',
      borderRadius: '12px',
      padding: '20px 40px',
      fontSize: '1.1rem',
      fontFamily: "'Work Sans', sans-serif",
      fontWeight: 600,
      cursor: 'pointer',
    },
    footer: {
      padding: '16px',
      textAlign: 'center',
      color: '#888',
      fontSize: '0.8rem',
    },
    spinner: {
      width: '28px',
      height: '28px',
      border: '4px solid #1a1a1a',
      borderTopColor: 'transparent',
      borderRadius: '50%',
      animation: 'spin 0.8s linear infinite',
    },
  };

  if (showSuccess) {
    return (
      <div style={styles.successOverlay}>
        <div style={styles.successIcon}>✅</div>
        <div style={styles.successText}>Time Submitted!</div>
        <div style={styles.successDetails}>{name} • {hours} hours • {jobSite}</div>
        <button style={styles.newEntryBtn} onClick={resetForm}>Submit Another</button>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&family=Work+Sans:wght@400;600;700&display=swap');
        @keyframes spin { to { transform: rotate(360deg); } }
        input:focus, select:focus, textarea:focus { border-color: #FFD100 !important; box-shadow: 0 0 0 3px rgba(255, 209, 0, 0.2); }
        button:active { transform: scale(0.98); }
      `}</style>
      
      <header style={styles.header}>
        <div style={styles.headerInner}>
          <span style={{ fontSize: '1.8rem' }}>🏗️</span>
          <span style={styles.logo}>TIME CARD</span>
        </div>
      </header>

      <main style={styles.main}>
        <div style={styles.dateDisplay}>
          <div style={styles.label}>Today's Date</div>
          <div style={styles.dateValue}>{currentDate}</div>
        </div>

        {error && <div style={styles.error}>{error}</div>}

        <div style={styles.formSection}>
          <div style={styles.sectionLabel}>
            <div style={styles.labelBar}></div>
            Your Name
          </div>
          <input
            type="text"
            style={styles.input}
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div style={styles.formSection}>
          <div style={styles.sectionLabel}>
            <div style={styles.labelBar}></div>
            Job Site / Project
          </div>
          <select style={styles.select} value={jobSite} onChange={(e) => setJobSite(e.target.value)}>
            <option value="">Select a job site...</option>
            <option value="Main Street Office">Main Street Office</option>
            <option value="Riverside Apartments">Riverside Apartments</option>
            <option value="Downtown Mall">Downtown Mall</option>
            <option value="Highway 101 Bridge">Highway 101 Bridge</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div style={{...styles.formSection, background: 'linear-gradient(135deg, #2d2d2d 0%, #363636 100%)', borderColor: '#FFD100'}}>
          <div style={styles.sectionLabel}>
            <div style={styles.labelBar}></div>
            Quick Select (8-hour shifts)
          </div>
          <div style={{fontSize: '0.85rem', color: '#aaa', marginBottom: '16px'}}>Tap a common shift to auto-fill times</div>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px'}}>
            <button style={styles.quickBtn} onClick={() => setQuickTime('05:00', '13:00')}>
              <span style={{fontSize: '1rem', fontWeight: 600, color: '#FFD100'}}>5am – 1pm</span>
            </button>
            <button style={styles.quickBtn} onClick={() => setQuickTime('06:00', '14:00')}>
              <span style={{fontSize: '1rem', fontWeight: 600, color: '#FFD100'}}>6am – 2pm</span>
            </button>
            <button style={styles.quickBtn} onClick={() => setQuickTime('07:00', '15:00')}>
              <span style={{fontSize: '1rem', fontWeight: 600, color: '#FFD100'}}>7am – 3pm</span>
            </button>
            <button style={styles.quickBtn} onClick={() => setQuickTime('08:00', '16:00')}>
              <span style={{fontSize: '1rem', fontWeight: 600, color: '#FFD100'}}>8am – 4pm</span>
            </button>
          </div>
        </div>

        <div style={styles.formSection}>
          <div style={styles.sectionLabel}>
            <div style={styles.labelBar}></div>
            Or Enter Manually
          </div>
          <div style={styles.timeRow}>
            <div style={styles.timeWrapper}>
              <input type="time" style={styles.timeInput} value={timeIn} onChange={(e) => setTimeIn(e.target.value)} />
              <span style={styles.timeLabel}>Start</span>
            </div>
            <span style={styles.separator}>→</span>
            <div style={styles.timeWrapper}>
              <input type="time" style={styles.timeInput} value={timeOut} onChange={(e) => setTimeOut(e.target.value)} />
              <span style={styles.timeLabel}>End</span>
            </div>
          </div>
        </div>

        <div style={styles.hoursDisplay}>
          <div style={{ ...styles.label, color: '#1a1a1a', opacity: 0.7 }}>Total Hours</div>
          <div style={styles.hoursValue}>
            {hours}
            <span style={styles.hoursUnit}>hrs</span>
          </div>
        </div>

        <div style={styles.formSection}>
          <div style={styles.sectionLabel}>
            <div style={styles.labelBar}></div>
            Notes (optional)
          </div>
          <textarea
            style={styles.textarea}
            placeholder="Weather delay, equipment used, etc."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={2}
          />
        </div>

        <button 
          style={{ ...styles.submitBtn, ...(isLoading ? { background: '#444', color: '#888' } : {}) }} 
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? (
            <div style={styles.spinner}></div>
          ) : (
            <>
              <span style={{ fontSize: '1.6rem' }}>📤</span>
              Submit Time
            </>
          )}
        </button>
      </main>

      <footer style={styles.footer}>
        Time Tracking
      </footer>
    </div>
  );
}
