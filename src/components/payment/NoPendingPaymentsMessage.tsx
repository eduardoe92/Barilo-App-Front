function NoPendingPaymentsMessage() {
  return (
    <div className="justify-center py-20 mx-auto rounded-lg shadow-2xl w-72 ms:w-80 bg-inactive-button-bg">
      <div className="flex items-center justify-center py-4 mx-auto ms:w-[18em]">
        <p className="px-8 text-4xl font-bold text-center text-secondary-celeste font-primary">
          No se encuentran pagos pendientes
        </p>
      </div>
    </div>
  );
}

export default NoPendingPaymentsMessage;