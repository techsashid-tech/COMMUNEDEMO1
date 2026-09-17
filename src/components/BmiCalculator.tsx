import React, { useState } from 'react';
import { Calculator, ArrowRight, Activity, AlertCircle, CheckCircle } from 'lucide-react';

export const BmiCalculator: React.FC = () => {
  const [weight, setWeight] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [bmiResult, setBmiResult] = useState<{
    bmi: number;
    category: string;
    advice: string;
    color: string;
  } | null>(null);

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100;

    if (w > 0 && h > 0) {
      const calculatedBmi = parseFloat((w / (h * h)).toFixed(1));
      let category = '';
      let advice = '';
      let color = '';

      if (calculatedBmi < 18.5) {
        category = 'Underweight';
        advice = 'Recommended: Lean muscle hypertrophy strength training + surplus protein intake.';
        color = 'text-amber-500 bg-amber-500/15 border-amber-500/30';
      } else if (calculatedBmi <= 24.9) {
        category = 'Normal & Healthy Weight';
        advice = 'Optimal range! Focus on progressive overload, agility, and core conditioning.';
        color = 'text-emerald-500 bg-emerald-500/15 border-emerald-500/30';
      } else if (calculatedBmi <= 29.9) {
        category = 'Overweight';
        advice = 'Recommended: Life Fitness HIIT cardio deck sessions + calorie deficit strength regimen.';
        color = 'text-amber-600 bg-amber-600/15 border-amber-600/30';
      } else {
        category = 'Obese Class';
        advice = 'Recommended: Low impact joint-friendly elliptical cardio, steam detox, and personal trainer coaching.';
        color = 'text-rose-500 bg-rose-500/15 border-rose-500/30';
      }

      setBmiResult({
        bmi: calculatedBmi,
        category,
        advice,
        color,
      });
    }
  };

  return (
    <section id="calculator" className="py-20 bg-amber-50/20 dark:bg-black/50 border-b border-amber-500/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card-glass p-8 sm:p-12 rounded-3xl border border-amber-500/40 relative overflow-hidden shadow-2xl">
          
          {/* Header */}
          <div className="text-center mb-10">
            <div className="w-12 h-12 rounded-2xl gold-bg flex items-center justify-center text-black mx-auto mb-3 shadow-md">
              <Calculator className="w-6 h-6" />
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
              CHECK YOUR <span className="gold-gradient-text">BMI INDEX</span>
            </h2>
            <p className="text-slate-600 dark:text-gray-300 text-xs sm:text-sm mt-2 font-medium">
              Instant body composition benchmark before you start your Commune Fitness journey.
            </p>
          </div>

          <form onSubmit={calculateBMI} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-black text-amber-700 dark:text-amber-400 uppercase tracking-wider mb-2">
                Weight (KG)
              </label>
              <input
                type="number"
                step="0.5"
                min="20"
                max="300"
                required
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="e.g. 72"
                className="w-full bg-white/80 dark:bg-black/60 border border-amber-500/30 rounded-xl px-4 py-3.5 text-slate-900 dark:text-white focus:outline-none focus:border-amber-500 text-sm font-bold shadow-inner"
              />
            </div>

            <div>
              <label className="block text-xs font-black text-amber-700 dark:text-amber-400 uppercase tracking-wider mb-2">
                Height (CM)
              </label>
              <input
                type="number"
                step="1"
                min="90"
                max="250"
                required
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="e.g. 175"
                className="w-full bg-white/80 dark:bg-black/60 border border-amber-500/30 rounded-xl px-4 py-3.5 text-slate-900 dark:text-white focus:outline-none focus:border-amber-500 text-sm font-bold shadow-inner"
              />
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full gold-bg text-black font-black py-4 rounded-xl hover:scale-[1.01] transition-transform gold-glow flex items-center justify-center gap-2 text-sm tracking-wider uppercase shadow-lg"
              >
                <Activity className="w-5 h-5" />
                <span>CALCULATE BMI NOW</span>
              </button>
            </div>
          </form>

          {/* Result Card */}
          {bmiResult && (
            <div className={`mt-8 p-6 rounded-2xl border ${bmiResult.color} transition-all duration-500`}>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                <div>
                  <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                    {bmiResult.bmi >= 18.5 && bmiResult.bmi <= 24.9 ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <AlertCircle className="w-5 h-5" />
                    )}
                    <span className="text-xs font-black uppercase tracking-wider">
                      Status: {bmiResult.category}
                    </span>
                  </div>
                  <h3 className="text-3xl font-black">
                    Your BMI is <span className="underline">{bmiResult.bmi}</span>
                  </h3>
                  <p className="text-xs sm:text-sm font-medium mt-1 text-slate-700 dark:text-gray-200">
                    {bmiResult.advice}
                  </p>
                </div>

                <a
                  href={`https://wa.me/919938581222?text=${encodeURIComponent(
                    `Hi Commune Fitness, my BMI is ${bmiResult.bmi} (${bmiResult.category}). I want guidance on starting my fitness routine at Rex Plaza!`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="gold-bg text-black font-black px-5 py-3 rounded-xl hover:scale-105 transition-all text-xs flex items-center gap-2 flex-shrink-0 shadow-md"
                >
                  <span>Consult Trainer</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};
