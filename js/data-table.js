  // Sample data - in a real app, this would come from your database
  const policies = {
    'POL-2023-001': {
      policyNo: 'POL-2023-001',
      startDate: '2023-01-15',
      endDate: '2024-01-14',
      premium: '850.00',
      status: 'active',
      customerName: 'John Smith',
      customerEmail: 'john@example.com',
      customerPhone: '+1 555-123-4567',
      vehicleModel: 'Toyota Camry',
      vehiclePlate: 'ABC-1234',
      vehicleYear: '2020',
      notes: 'Customer has a clean driving record.'
    },
    'POL-2023-002': {
      policyNo: 'POL-2023-002',
      startDate: '2023-02-20',
      endDate: '2024-02-19',
      premium: '720.00',
      status: 'active',
      customerName: 'Sarah Johnson',
      customerEmail: 'sarah@example.com',
      customerPhone: '+1 555-987-6543',
      vehicleModel: 'Honda Accord',
      vehiclePlate: 'XYZ-5678',
      vehicleYear: '2019',
      notes: 'Customer opted for comprehensive coverage.'
    }
  };

  function openModal(type, policyNo) {
    const policy = policies[policyNo];
    
    if (type === 'view') {
      // Populate view modal
      document.getElementById('viewPolicyNo').textContent = policy.policyNo;
      document.getElementById('viewStartDate').textContent = policy.startDate;
      document.getElementById('viewEndDate').textContent = policy.endDate;
      document.getElementById('viewPremium').textContent = '$' + policy.premium;
      
      const statusElement = document.getElementById('viewStatus');
      statusElement.textContent = policy.status.charAt(0).toUpperCase() + policy.status.slice(1);
      statusElement.className = 'px-2 inline-flex text-xs leading-5 font-semibold rounded-full ' + 
        (policy.status === 'active' ? 'bg-green-100 text-green-800' : 
         policy.status === 'expired' ? 'bg-red-100 text-red-800' : 
         'bg-yellow-100 text-yellow-800');
      
      document.getElementById('viewCustomerName').textContent = policy.customerName;
      document.getElementById('viewCustomerEmail').textContent = policy.customerEmail;
      document.getElementById('viewCustomerPhone').textContent = policy.customerPhone;
      document.getElementById('viewVehicleModel').textContent = policy.vehicleModel;
      document.getElementById('viewVehiclePlate').textContent = policy.vehiclePlate;
      document.getElementById('viewVehicleYear').textContent = policy.vehicleYear;
      
      document.getElementById('viewModal').classList.remove('hidden');
    } else if (type === 'edit') {
      // Populate edit modal
      document.getElementById('editPolicyNo').value = policy.policyNo;
      document.getElementById('editStartDate').value = policy.startDate;
      document.getElementById('editEndDate').value = policy.endDate;
      document.getElementById('editPremium').value = policy.premium;
      document.getElementById('editStatus').value = policy.status;
      document.getElementById('editNotes').value = policy.notes;
      
      document.getElementById('editModal').classList.remove('hidden');
    }
  }

  function closeModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
  }

  function savePolicy() {
    const policyNo = document.getElementById('editPolicyNo').value;
    // In a real app, you would save the changes to your database here
    alert(`Policy ${policyNo} changes saved!`);
    closeModal('editModal');
  }


const bankTransfer = document.getElementById('banktransfer');
const cheque = document.getElementById('cheque');
const mobilePayment = document.getElementById('mobilepayment');

const bank = document.getElementById('bank');
const chequeInfo = document.getElementById('cheque-info');
const mobile = document.getElementById('mobile');

function hideAll() {
  bank.classList.add("hidden");
  chequeInfo.classList.add("hidden");
  mobile.classList.add("hidden");
}

function uncheckOthers(current) {
  [bankTransfer, cheque, mobilePayment].forEach(input => {
    if (input !== current) {
      input.checked = false;
    }
  });
}

bankTransfer.addEventListener("change", function () {
  if (bankTransfer.checked) {
    uncheckOthers(bankTransfer);
    hideAll();
    bank.classList.remove("hidden");
  } else {
    bank.classList.add("hidden");
  }
});

cheque.addEventListener("change", function () {
  if (cheque.checked) {
    uncheckOthers(cheque);
    hideAll();
    chequeInfo.classList.remove("hidden");
  } else {
    chequeInfo.classList.add("hidden");
  }
});

mobilePayment.addEventListener("change", function () {
  if (mobilePayment.checked) {
    uncheckOthers(mobilePayment);
    hideAll();
    mobile.classList.remove("hidden");
  } else {
    mobile.classList.add("hidden");
  }
});


