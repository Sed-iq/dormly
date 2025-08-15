import React, { useState } from 'react';
import { ArrowLeft, Shield, Download, CheckCircle, Clock } from 'lucide-react';

const PaymentFlow = ({ selectedLodge, rentalApplication, setCurrentView }) => {
  const [currentStep, setCurrentStep] = useState('payment'); // payment, loading, receipt
  const [receiptData] = useState({
    transactionId: 'TXN' + Math.random().toString(36).substr(2, 9).toUpperCase(),
    date: new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }),
    time: new Date().toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit' 
    }),
    lodge: selectedLodge || {
      name: "Premium Studio Apartment",
      location: "Victoria Island, Lagos",
      yearlyRent: 1200000
    },
    studentName: rentalApplication?.fullName || "John Doe",
    studentId: rentalApplication?.studentId || "STU001234",
    studentEmail: rentalApplication?.email || "john.doe@example.com",
    studentPhone: rentalApplication?.phone || "+234 XXX XXX XXXX",
    university: rentalApplication?.university || selectedLodge?.university || "University",
    emergencyContact: rentalApplication?.emergencyContact || "Emergency Contact",
    emergencyPhone: rentalApplication?.emergencyPhone || "+234 XXX XXX XXXX"
  });

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const handlePayment = () => {
    setCurrentStep('loading');
    setTimeout(() => {
      setCurrentStep('receipt');
    }, 3000);
  };

  const handleBackToApplication = () => {
    setCurrentView('rent');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
  };

  const downloadReceipt = () => {
    // Create a printable version
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Dormly Receipt</title>
        <style>
          body { 
            font-family: 'Arial', sans-serif; 
            margin: 0; 
            padding: 40px; 
            background: white;
            color: #333;
          }
          .receipt { 
            max-width: 600px; 
            margin: 0 auto; 
            background: white;
            border: 2px solid #e5e7eb;
            border-radius: 12px;
            overflow: hidden;
          }
          .header { 
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
            padding: 30px; 
            text-align: center; 
            color: white;
          }
          .logo { 
            font-size: 32px; 
            font-weight: bold; 
            margin-bottom: 8px;
            letter-spacing: -1px;
          }
          .tagline { 
            font-size: 14px; 
            opacity: 0.9;
          }
          .content { 
            padding: 30px; 
          }
          .success { 
            text-align: center; 
            margin-bottom: 30px;
            padding: 20px;
            background: #f0fdf4;
            border-radius: 8px;
            border: 1px solid #bbf7d0;
          }
          .success-icon {
            width: 48px;
            height: 48px;
            background: #22c55e;
            border-radius: 50%;
            margin: 0 auto 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 24px;
          }
          .details { 
            margin-bottom: 30px; 
          }
          .detail-row { 
            display: flex; 
            justify-content: space-between; 
            padding: 12px 0; 
            border-bottom: 1px solid #f3f4f6;
          }
          .detail-row:last-child { 
            border-bottom: none; 
          }
          .label { 
            color: #6b7280; 
            font-weight: 500;
          }
          .value { 
            font-weight: 600; 
            text-align: right;
          }
          .total-row {
            background: #f9fafb;
            margin: 0 -15px;
            padding: 15px;
            border-radius: 8px;
          }
          .total-row .value {
            color: #667eea;
            font-size: 18px;
          }
          .footer { 
            text-align: center; 
            color: #6b7280; 
            font-size: 12px;
            padding-top: 20px;
            border-top: 1px solid #e5e7eb;
          }
          @media print {
            body { padding: 0; }
            .no-print { display: none; }
          }
        </style>
      </head>
      <body>
        <div class="receipt">
          <div class="header">
            <div class="logo">Dormly</div>
            <div class="tagline">Student Accommodation Made Simple</div>
          </div>
          <div class="content">
            <div class="success">
              <div class="success-icon">✓</div>
              <h2 style="margin: 0; color: #22c55e;">Payment Successful!</h2>
              <p style="margin: 8px 0 0 0; color: #6b7280;">Your accommodation has been secured</p>
            </div>
            
            <div class="details">
              <div class="detail-row">
                <span class="label">Transaction ID</span>
                <span class="value">${receiptData.transactionId}</span>
              </div>
              <div class="detail-row">
                <span class="label">Date & Time</span>
                <span class="value">${receiptData.date} at ${receiptData.time}</span>
              </div>
              <div class="detail-row">
                <span class="label">Student Name</span>
                <span class="value">${receiptData.studentName}</span>
              </div>
              <div class="detail-row">
                <span class="label">Student ID</span>
                <span class="value">${receiptData.studentId}</span>
              </div>
              <div class="detail-row">
                <span class="label">Email</span>
                <span class="value">${receiptData.studentEmail}</span>
              </div>
              <div class="detail-row">
                <span class="label">Phone</span>
                <span class="value">${receiptData.studentPhone}</span>
              </div>
              <div class="detail-row">
                <span class="label">University</span>
                <span class="value">${receiptData.university}</span>
              </div>
              <div class="detail-row">
                <span class="label">Accommodation</span>
                <span class="value">${receiptData.lodge.name}</span>
              </div>
              <div class="detail-row">
                <span class="label">Location</span>
                <span class="value">${receiptData.lodge.location}</span>
              </div>
              <div class="detail-row">
                <span class="label">Emergency Contact</span>
                <span class="value">${receiptData.emergencyContact}</span>
              </div>
              <div class="detail-row">
                <span class="label">Emergency Phone</span>
                <span class="value">${receiptData.emergencyPhone}</span>
              </div>
              <div class="detail-row">
                <span class="label">Annual Rent</span>
                <span class="value">${formatCurrency(receiptData.lodge.yearlyRent)}</span>
              </div>
              <div class="detail-row">
                <span class="label">Security Deposit</span>
                <span class="value">${formatCurrency(receiptData.lodge.yearlyRent / 12)}</span>
              </div>
              <div class="detail-row">
                <span class="label">Processing Fee</span>
                <span class="value">${formatCurrency(5000)}</span>
              </div>
              <div class="detail-row total-row">
                <span class="label" style="font-size: 16px; color: #374151;">Total Paid</span>
                <span class="value">${formatCurrency(receiptData.lodge.yearlyRent + receiptData.lodge.yearlyRent / 12 + 5000)}</span>
              </div>
            </div>
            
            <div class="footer">
              <p>Thank you for choosing Dormly for your student accommodation needs.</p>
              <p>For support, contact us at support@dormly.com or +234 800 DORMLY</p>
              <p style="margin-top: 15px; font-weight: 600;">This is an official receipt from Dormly</p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
    }, 500);
  };

  if (currentStep === 'loading') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-xl p-12 text-center max-w-md">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-indigo-500 border-t-transparent mx-auto mb-6"></div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Processing Payment</h2>
          <p className="text-gray-600 mb-6">Please wait while we secure your accommodation...</p>
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
            <Clock className="h-4 w-4" />
            <span>This may take a few moments</span>
          </div>
        </div>
      </div>
    );
  }

  if (currentStep === 'receipt') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
        <div className="max-w-2xl mx-auto py-8">
          <button
            onClick={handleBackToHome}
            className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors mb-6"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </button>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-10 text-center">
              <h1 className="text-4xl font-bold text-white mb-2">Dormly</h1>
              <p className="text-indigo-100">Student Accommodation Made Simple</p>
            </div>

            <div className="p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Payment Successful!</h2>
                <p className="text-gray-600">Your accommodation has been secured</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600 font-medium">Transaction ID</span>
                  <span className="font-semibold text-gray-900">{receiptData.transactionId}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600 font-medium">Date & Time</span>
                  <span className="font-semibold text-gray-900">{receiptData.date} at {receiptData.time}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600 font-medium">Student Name</span>
                  <span className="font-semibold text-gray-900">{receiptData.studentName}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600 font-medium">Student ID</span>
                  <span className="font-semibold text-gray-900">{receiptData.studentId}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600 font-medium">Email</span>
                  <span className="font-semibold text-gray-900">{receiptData.studentEmail}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600 font-medium">Phone</span>
                  <span className="font-semibold text-gray-900">{receiptData.studentPhone}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600 font-medium">University</span>
                  <span className="font-semibold text-gray-900">{receiptData.university}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600 font-medium">Accommodation</span>
                  <span className="font-semibold text-gray-900 text-right max-w-xs">{receiptData.lodge.name}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600 font-medium">Location</span>
                  <span className="font-semibold text-gray-900">{receiptData.lodge.location}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600 font-medium">Emergency Contact</span>
                  <span className="font-semibold text-gray-900">{receiptData.emergencyContact}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600 font-medium">Emergency Phone</span>
                  <span className="font-semibold text-gray-900">{receiptData.emergencyPhone}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600 font-medium">Annual Rent</span>
                  <span className="font-semibold text-gray-900">{formatCurrency(receiptData.lodge.yearlyRent)}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600 font-medium">Security Deposit</span>
                  <span className="font-semibold text-gray-900">{formatCurrency(receiptData.lodge.yearlyRent / 12)}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600 font-medium">Processing Fee</span>
                  <span className="font-semibold text-gray-900">{formatCurrency(5000)}</span>
                </div>
                <div className="flex justify-between py-4 bg-indigo-50 rounded-lg px-4 mt-4">
                  <span className="text-lg font-bold text-gray-900">Total Paid</span>
                  <span className="text-lg font-bold text-indigo-600">
                    {formatCurrency(receiptData.lodge.yearlyRent + receiptData.lodge.yearlyRent / 12 + 5000)}
                  </span>
                </div>
              </div>

              <button
                onClick={downloadReceipt}
                className="w-full bg-indigo-600 text-white py-4 rounded-lg hover:bg-indigo-700 transition-colors font-medium flex items-center justify-center space-x-2"
              >
                <Download className="h-5 w-5" />
                <span>Download Receipt</span>
              </button>

              <div className="text-center mt-6 pt-6 border-t border-gray-200">
                <p className="text-gray-600 mb-1">Thank you for choosing Dormly!</p>
                <p className="text-sm text-gray-500">For support: support@dormly.com | +234 800 DORMLY</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <button 
            onClick={handleBackToApplication}
            className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Application
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Complete Your Payment</h1>
                <p className="text-gray-600">Secure your accommodation with Dormly</p>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-green-600" />
                  Secure & Instant Payment
                </h3>
                <p className="text-gray-700 mb-4">
                  Your payment is processed instantly and securely. No card details required for this demo.
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    256-bit SSL encryption
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Instant confirmation
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Receipt provided
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <button
                  onClick={handlePayment}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                >
                  Complete Payment Securely
                </button>

                <div className="text-center">
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                    <Shield className="h-4 w-4" />
                    <span>Protected by bank-level security</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-4">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                Payment Summary
              </h3>

                              <div className="space-y-4 mb-6">
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Annual Rent</span>
                  <span className="font-semibold">{formatCurrency(receiptData.lodge.yearlyRent)}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Security Deposit</span>
                  <span className="font-semibold">{formatCurrency(receiptData.lodge.yearlyRent / 12)}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Processing Fee</span>
                  <span className="font-semibold">{formatCurrency(5000)}</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between">
                    <span className="text-xl font-bold text-gray-900">Total</span>
                    <span className="text-xl font-bold text-indigo-600">
                      {formatCurrency(receiptData.lodge.yearlyRent + receiptData.lodge.yearlyRent / 12 + 5000)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Accommodation Details</h4>
                <p className="text-sm text-gray-700 mb-1">{receiptData.lodge.name}</p>
                <p className="text-sm text-gray-600">{receiptData.lodge.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentFlow;