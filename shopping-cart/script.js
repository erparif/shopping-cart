// ========================Phone===========================
document.getElementById('phoneIncrease').addEventListener('click', function(){
    productCounter('phone', true);
});

document.getElementById('phoneDecrease').addEventListener('click', function(){
    productCounter('phone', false);
});
//  =================================================================   
//  =======================Phone Case===========================
document.getElementById('caseIncrease').addEventListener('click', function(){
    productCounter('case', true);
});

document.getElementById('caseDecrease').addEventListener('click', function(){
    productCounter('case', false);
});
// ================================================================

function productCounter(product, isIncrease){
    let productInput = document.getElementById(product + 'Count');
    const productCount = parseInt(productInput.value);
    let ProductNewCount = productCount;
    if(isIncrease == true){
        ProductNewCount = productCount + 1;
    }
    if(isIncrease == false && productCount > 0){
        ProductNewCount = productCount - 1;
    }
    productInput.value = ProductNewCount;
    let productTotal = 0;
    if(product == 'phone'){
        productTotal = ProductNewCount * 1219;
    }
    if(product == 'case'){
        productTotal = ProductNewCount * 59;
    }
    document.getElementById(product + 'Prise').innerText = productTotal;
    calculateTotal();
}

function calculateTotal(){
    const phoneCount = getInputValue('phone');
    const caseCount = getInputValue('case');

    const subTotalPrise = (phoneCount * 1219) + (caseCount * 59);
    document.getElementById('subTotal').innerText = subTotalPrise;

    const taxPrise = Math.round(subTotalPrise * 0.01);
    document.getElementById('tax').innerText = taxPrise;

    const grandTotal = taxPrise + subTotalPrise;
    document.getElementById('total').innerText = grandTotal;
    console.log(grandTotal);
}

function getInputValue(product){
    const productInput = document.getElementById(product + 'Count');
    const productCount = parseInt(productInput.value);
    return productCount;
}

/*****************************Phone ***************************************** 
// ===================================Phone Function=====================
function handlePhoneCountChange(isIncrease){
    let phoneInput = document.getElementById('phoneCount');
    const phoneCount = parseInt(phoneInput.value);
    let phoneNewCount = phoneCount;
    if(isIncrease == true){
        phoneNewCount = phoneCount + 1;
    }
    if(isIncrease == false && phoneCount > 0){
        phoneNewCount = phoneCount - 1;
    }
    phoneInput.value = phoneNewCount;
    const phoneTotal = phoneNewCount * 1219;
    document.getElementById('phonePrise').innerText = phoneTotal;
}

document.getElementById('phoneIncrease').addEventListener('click', function(){
    let phoneInput = document.getElementById('phoneCount');
    const phoneCount = parseInt(phoneInput.value)
    const phoneNewCount = phoneCount + 1;
    phoneInput.value = phoneNewCount;
    const phoneTotal = phoneNewCount * 1219;
    document.getElementById('phonePrise').innerText = phoneTotal;
});

document.getElementById('phoneDecrease').addEventListener('click', function(){
    let phoneInput = document.getElementById('phoneCount');
    const phoneCount = parseInt(phoneInput.value);
    const phoneNewCount = phoneCount - 1;
    phoneInput.value = phoneNewCount;
    const phoneTotal = phoneNewCount * 1219;
    document.getElementById('phonePrise').innerText = phoneTotal;
});

// ******************************************************************************
// ******************************Phone Case*****************************************
// ======================================== Phone Case Function ====================
function handleProductChange(isIncrease){
    let caseInput = document.getElementById('caseCount');
    const caseCount = parseInt(caseInput.value);
    let caseNewCount = caseCount;
    if(isIncrease == true){
        caseNewCount = caseCount + 1;
    }
    if(isIncrease == false && caseCount > 0){
        caseNewCount = caseCount - 1;
    }
    caseInput.value = caseNewCount;
    const caseTotal = caseNewCount * 59;
    document.getElementById('casePrise').innerText = caseTotal;
}

document.getElementById('caseIncrease').addEventListener('click', function(){
    let caseInput = document.getElementById('caseCount');
    const caseCount = parseInt(caseInput.value);
    const caseNewCount = caseCount + 1;
    caseInput.value = caseNewCount;
    const caseTotal = caseNewCount * 59;
    document.getElementById('casePrise').innerText = caseTotal;
});

document.getElementById('caseDecrease').addEventListener('click', function(){
    let caseInput = document.getElementById('caseCount');
    const caseCount = parseInt(caseInput.value);
    const caseNewCount = caseCount - 1;
    caseInput.value = caseNewCount;
    const caseTotal = caseNewCount * 59;
    document.getElementById('casePrise').innerText = caseTotal;
});
// ******************************************************************
*/