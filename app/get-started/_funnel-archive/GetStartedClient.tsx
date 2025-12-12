'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Button from '@/components/Button';

type ProductLine = 'essential' | 'core' | null;
type EssentialDemographic = 'women-25-40' | 'men-30-45' | 'women-40-55' | 'men-45-60' | 'post-menopause' | null;
type CoreGoal = 'health' | 'performance' | 'longevity' | null;
type TestingMethod = 'home' | 'partner' | null;

export default function GetStartedClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [step, setStep] = useState<number>(1);
  const [productLine, setProductLine] = useState<ProductLine>(null);
  const [essentialDemographic, setEssentialDemographic] = useState<EssentialDemographic>(null);
  const [coreGoal, setCoreGoal] = useState<CoreGoal>(null);
  const [testingMethod, setTestingMethod] = useState<TestingMethod>(null);
  const [cart, setCart] = useState<any[]>([]);
  const isNavigatingRef = useRef(false);
  const historyStateRef = useRef<{ step: number; productLine: ProductLine; essentialDemographic: EssentialDemographic; coreGoal: CoreGoal; testingMethod: TestingMethod }[]>([]);

  // Calculate total steps based on product line
  const getTotalSteps = () => {
    if (productLine === 'essential') return 3;
    if (productLine === 'core') return 4;
    return 1;
  };

  const getCurrentStepNumber = () => {
    if (step === 1) return 1;
    if (step === 2) return 2;
    if (step === 3 && productLine === 'essential') return 3;
    if (step === 3 && productLine === 'core') return 3;
    if (step === 4) return 4;
    if (step === 5) return 5;
    return 1;
  };

  // Save state to history when step changes
  const saveStateToHistory = (newStep: number, newProductLine: ProductLine, newEssentialDemographic: EssentialDemographic, newCoreGoal: CoreGoal, newTestingMethod: TestingMethod) => {
    if (isNavigatingRef.current) return;
    
    const state = {
      step: newStep,
      productLine: newProductLine,
      essentialDemographic: newEssentialDemographic,
      coreGoal: newCoreGoal,
      testingMethod: newTestingMethod,
    };
    
    historyStateRef.current.push(state);
    window.history.pushState(state, '', window.location.pathname + window.location.search);
  };

  // Handle browser back/forward navigation
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state && historyStateRef.current.length > 0) {
        isNavigatingRef.current = true;
        const state = event.state;
        setStep(state.step || 1);
        setProductLine(state.productLine || null);
        setEssentialDemographic(state.essentialDemographic || null);
        setCoreGoal(state.coreGoal || null);
        setTestingMethod(state.testingMethod || null);
        if (state.step === 5) {
          setCart([{ name: 'Product', price: '$89/month' }]);
        } else {
          setCart([]);
        }
        // Remove the state we're going back to from history
        const index = historyStateRef.current.findIndex(s => 
          s.step === state.step && 
          s.productLine === state.productLine
        );
        if (index >= 0) {
          historyStateRef.current = historyStateRef.current.slice(0, index + 1);
        }
        setTimeout(() => {
          isNavigatingRef.current = false;
        }, 100);
      } else if (historyStateRef.current.length > 0) {
        // Going back to initial state
        isNavigatingRef.current = true;
        setStep(1);
        setProductLine(null);
        setEssentialDemographic(null);
        setCoreGoal(null);
        setTestingMethod(null);
        setCart([]);
        historyStateRef.current = [];
        setTimeout(() => {
          isNavigatingRef.current = false;
        }, 100);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    // Check URL parameters for pre-selection
    const path = searchParams.get('path');
    if (path === 'essential') {
      setProductLine('essential');
      setStep(2);
      saveStateToHistory(2, 'essential', null, null, null);
    } else if (path === 'precision' || path === 'core') {
      setProductLine('core');
      setStep(2);
      saveStateToHistory(2, 'core', null, null, null);
    } else {
      // Initialize with step 1 state
      saveStateToHistory(1, null, null, null, null);
    }
  }, [searchParams]);

  const handleProductLineSelect = (line: ProductLine) => {
    setProductLine(line);
    setStep(2);
    saveStateToHistory(2, line, null, null, null);
  };

  const handleEssentialDemographicSelect = (demo: EssentialDemographic) => {
    setEssentialDemographic(demo);
    setStep(3);
    saveStateToHistory(3, productLine, demo, null, null);
  };

  const handleCoreGoalSelect = (goal: CoreGoal) => {
    setCoreGoal(goal);
    setStep(3);
    saveStateToHistory(3, productLine, null, goal, null);
  };

  const handleTestingMethodSelect = (method: TestingMethod) => {
    setTestingMethod(method);
    setStep(4);
    saveStateToHistory(4, productLine, null, coreGoal, method);
  };

  const handleAddToCart = (product: any) => {
    setCart([product]);
    setStep(5);
    saveStateToHistory(5, productLine, essentialDemographic, coreGoal, testingMethod);
  };

  const handleCheckout = () => {
    // Simulate checkout
    alert('Checkout simulation: Your order has been placed! (This is a demo)');
  };

  const getProductName = () => {
    if (productLine === 'essential' && essentialDemographic) {
      const names: Record<EssentialDemographic, string> = {
        'women-25-40': 'Essential for Women 25-40',
        'men-30-45': 'Essential for Men 30-45',
        'women-40-55': 'Essential for Women 40-55',
        'men-45-60': 'Essential for Men 45-60',
        'post-menopause': 'Essential Post-Menopause',
      };
      return names[essentialDemographic];
    }
    if (productLine === 'core' && coreGoal) {
      const names: Record<CoreGoal, string> = {
        health: 'Core Health',
        performance: 'Core Performance',
        longevity: 'Core Longevity',
      };
      return names[coreGoal];
    }
    return 'Lab1 Formula';
  };

  const getProductPrice = () => {
    if (productLine === 'essential') {
      return '$89/month';
    }
    return '$199/month';
  };

  return (
    <>
      {/* Progress Stepper */}
      <div className="funnel-stepper">
        <div className="funnel-stepper__container">
          {Array.from({ length: getTotalSteps() }, (_, i) => i + 1).map((stepNum) => (
            <React.Fragment key={stepNum}>
              <div className={`funnel-stepper__step ${getCurrentStepNumber() >= stepNum ? 'funnel-stepper__step--active' : ''}`}></div>
              {stepNum < getTotalSteps() && (
                <div className={`funnel-stepper__line ${getCurrentStepNumber() > stepNum ? 'funnel-stepper__line--active' : ''}`}></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Step 1: Product Line Selection */}
      {step === 1 && (
        <section key="step-1" className="funnel-step">
          <div className="funnel-step__container">
            <div className="product-line-grid">
              <button
                className="product-line-card"
                onClick={() => handleProductLineSelect('essential')}
              >
                <div className="product-line-card__label">Essential</div>
                <h3 className="product-line-card__title">Begin today. No testing required.</h3>
                <p className="product-line-card__description">
                  Premium formulas customized for your stage of life. Start your journey with trusted, science-backed nutrition that adapts to your demographic profile.
                </p>
                <div className="product-line-card__cta">Select Essential →</div>
              </button>
              <button
                className="product-line-card product-line-card--core"
                onClick={() => handleProductLineSelect('core')}
              >
                <div className="product-line-card__label">Core (Precision)</div>
                <h3 className="product-line-card__title">DNA + blood testing. Evolving formulas.</h3>
                <p className="product-line-card__description">
                  Deep personalization through genetic and biomarker analysis. Your formula evolves every 3 months based on your body's actual needs and responses.
                </p>
                <div className="product-line-card__cta">Select Core →</div>
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Step 2a: Essential Demographic Selection */}
      {step === 2 && productLine === 'essential' && (
        <section key="step-2-essential" className="funnel-step">
          <div className="funnel-step__container">
            <button className="funnel-step__back" onClick={() => { 
              if (historyStateRef.current.length > 1) {
                window.history.back();
              } else {
                setStep(1); 
                setProductLine(null);
                saveStateToHistory(1, null, null, null, null);
              }
            }}>
              ← Back
            </button>
            <div className="demographic-grid">
              <button
                className="demographic-card"
                onClick={() => handleEssentialDemographicSelect('women-25-40')}
              >
                <h4>Women 25-40</h4>
                <p>Optimized for energy, iron, B12, magnesium</p>
              </button>
              <button
                className="demographic-card"
                onClick={() => handleEssentialDemographicSelect('men-30-45')}
              >
                <h4>Men 30-45</h4>
                <p>Optimized for vitamin D, zinc, omega-3</p>
              </button>
              <button
                className="demographic-card"
                onClick={() => handleEssentialDemographicSelect('women-40-55')}
              >
                <h4>Women 40-55</h4>
                <p>Optimized for hormonal balance, energy, cellular health</p>
              </button>
              <button
                className="demographic-card"
                onClick={() => handleEssentialDemographicSelect('men-45-60')}
              >
                <h4>Men 45-60</h4>
                <p>Optimized for vitality, metabolic health, recovery</p>
              </button>
              <button
                className="demographic-card"
                onClick={() => handleEssentialDemographicSelect('post-menopause')}
              >
                <h4>Post-Menopause</h4>
                <p>Optimized for bone health, calcium, vitamin K2, collagen</p>
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Step 2b: Core Goal Selection */}
      {step === 2 && productLine === 'core' && (
        <section key="step-2-core" className="funnel-step">
          <div className="funnel-step__container">
            <button className="funnel-step__back" onClick={() => { 
              if (historyStateRef.current.length > 1) {
                window.history.back();
              } else {
                setStep(1); 
                setProductLine(null);
                saveStateToHistory(1, null, null, null, null);
              }
            }}>
              ← Back
            </button>
            <div className="goal-grid">
              <button
                className="goal-card"
                onClick={() => handleCoreGoalSelect('health')}
              >
                <h4>Health</h4>
                <p>
                  Optimize energy, reduce inflammation,<br />
                  support immune function, improve sleep
                </p>
              </button>
              <button
                className="goal-card"
                onClick={() => handleCoreGoalSelect('performance')}
              >
                <h4>Performance</h4>
                <p>
                  Enhance recovery, boost endurance,<br />
                  optimize training adaptation, reduce fatigue
                </p>
              </button>
              <button
                className="goal-card"
                onClick={() => handleCoreGoalSelect('longevity')}
              >
                <h4>Longevity</h4>
                <p>
                  Support cellular health, optimize biomarkers,<br />
                  enhance cognitive function, maintain vitality
                </p>
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Step 3a: Essential Product Display */}
      {step === 3 && productLine === 'essential' && essentialDemographic && (
        <section key="step-3-essential" className="funnel-step">
          <div className="funnel-step__container">
            <button className="funnel-step__back" onClick={() => { 
              if (historyStateRef.current.length > 1) {
                window.history.back();
              } else {
                setStep(2); 
                setEssentialDemographic(null);
                saveStateToHistory(2, productLine, null, null, null);
              }
            }}>
              ← Back
            </button>
            <div className="product-display">
              <div className="product-display__image">
                <img src="/Lab1-image-product-welcome-package.png" alt={getProductName()} />
              </div>
              <div className="product-display__content">
                <h2 className="product-display__title">{getProductName()}</h2>
                <p className="product-display__price">{getProductPrice()}</p>
                <div className="product-display__description">
                  <h4>What's Included:</h4>
                  <ul>
                    <li>Customized formula for your demographic</li>
                    <li>Premium, active-form ingredients</li>
                    <li>30-day supply</li>
                    <li>Flexible subscription (pause, skip, cancel anytime)</li>
                  </ul>
                </div>
                <Button
                  variant="primary"
                  size="large"
                  fullWidth
                  onClick={() => handleAddToCart({
                    name: getProductName(),
                    price: getProductPrice(),
                    type: 'essential',
                  })}
                >
                  Add to Cart →
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Step 3b: Core Testing Method Selection */}
      {step === 3 && productLine === 'core' && coreGoal && (
        <section key="step-3-core" className="funnel-step">
          <div className="funnel-step__container">
            <button className="funnel-step__back" onClick={() => { 
              if (historyStateRef.current.length > 1) {
                window.history.back();
              } else {
                setStep(2); 
                setCoreGoal(null);
                saveStateToHistory(2, productLine, null, null, null);
              }
            }}>
              ← Back
            </button>
            <div className="testing-method-grid">
              <button
                className="testing-method-card"
                onClick={() => handleTestingMethodSelect('home')}
              >
                <h4>Self-Test at Home</h4>
                <p>
                  DNA: Saliva sample (10 minutes)<br />
                  Blood: Finger prick kit<br />
                  Prepaid shipping included<br />
                  Results in 2-3 weeks
                </p>
              </button>
              <button
                className="testing-method-card"
                onClick={() => handleTestingMethodSelect('partner')}
              >
                <h4>Get Tested at Our Partners</h4>
                <p>
                  Visit a partner lab near you<br />
                  Professional blood draw<br />
                  Results in 2-3 weeks<br />
                  We'll send you the nearest location
                </p>
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Step 4: Core Product Display */}
      {step === 4 && productLine === 'core' && coreGoal && testingMethod && (
        <section key="step-4-core" className="funnel-step">
          <div className="funnel-step__container">
            <button className="funnel-step__back" onClick={() => { 
              if (historyStateRef.current.length > 1) {
                window.history.back();
              } else {
                setStep(3); 
                setTestingMethod(null);
                saveStateToHistory(3, productLine, null, coreGoal, null);
              }
            }}>
              ← Back
            </button>
            <div className="product-display">
              <div className="product-display__image">
                <img src="/Lab1-image-performance-runner.png" alt={getProductName()} />
              </div>
              <div className="product-display__content">
                <h2 className="product-display__title">{getProductName()}</h2>
                <p className="product-display__price">{getProductPrice()}</p>
                <div className="product-display__description">
                  <h4>What's Included:</h4>
                  <ul>
                    <li>DNA testing (30 genetic markers)</li>
                    <li>Blood testing (45 biomarkers, quarterly)</li>
                    <li>Customized formula based on YOUR data</li>
                    <li>Formula evolves every 3 months</li>
                    <li>30-day supply per shipment</li>
                    <li>Testing method: {testingMethod === 'home' ? 'Self-Test at Home' : 'Partner Lab'}</li>
                  </ul>
                </div>
                <Button
                  variant="primary"
                  size="large"
                  fullWidth
                  onClick={() => handleAddToCart({
                    name: getProductName(),
                    price: getProductPrice(),
                    type: 'core',
                    testingMethod,
                  })}
                >
                  Add to Cart →
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Step 5: Checkout */}
      {step === 5 && cart.length > 0 && (
        <section key="step-5-checkout" className="funnel-step">
          <div className="funnel-step__container">
            <button className="funnel-step__back" onClick={() => { 
              if (historyStateRef.current.length > 1) {
                window.history.back();
              } else {
                if (productLine === 'essential') {
                  setStep(3);
                  setCart([]);
                  saveStateToHistory(3, productLine, essentialDemographic, null, null);
                } else {
                  setStep(4);
                  setCart([]);
                  saveStateToHistory(4, productLine, null, coreGoal, testingMethod);
                }
              }
            }}>
              ← Back
            </button>
            <div className="checkout-summary">
              <div className="checkout-item">
                <div className="checkout-item__details">
                  <h4>{cart[0].name}</h4>
                  <p>{cart[0].price} • Monthly subscription</p>
                </div>
                <div className="checkout-item__price">{cart[0].price}</div>
              </div>
              <div className="checkout-total">
                <div className="checkout-total__label">Total</div>
                <div className="checkout-total__amount">{cart[0].price}</div>
              </div>
              <div className="checkout-note">
                <p>
                  Your first shipment will include testing kits (if Core) and will ship within 48 hours.
                  Subsequent shipments arrive monthly.
                </p>
              </div>
              <Button
                variant="primary"
                size="large"
                fullWidth
                onClick={handleCheckout}
              >
                Complete Order →
              </Button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

