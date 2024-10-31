import Swal, { SweetAlertIcon } from 'sweetalert2';

export const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
});

export const showNotification = (type: SweetAlertIcon, message: string) => {
    Toast.fire({
        icon: type,
        title: message
    });
}

export const showConfirm = (type: SweetAlertIcon, title: string, text: string, confirmButtonText: string, cancelButtonText: string) => {
    return Swal.fire({
        title: title,
        text: text,
        icon: type,
        showCancelButton: true,
        confirmButtonText: confirmButtonText,
        cancelButtonText: cancelButtonText,
    });
}