import Image from 'next/image';

export default function Occurrences() {
  return (
    <div className="flex min-h-full flex-wrap items-center justify-center gap-10 p-5 text-black-200 lg:flex-nowrap lg:p-32">
      <div className="grid w-full gap-5">
        <h1>No período...</h1>
        <div className="text-2xl">
          Foram registrados 20 ocorrências, sendo 6 animais selvagens
          encontrados, 4 conflitos com empreendimentos, 2 desmatamentos, 3
          poluições no rio, 1 poluição de solo/erosão, 1 queimada e 3 outras
          ocorrências.
        </div>
        <button
          type="submit"
          className="text-black w-1/2 rounded-xl bg-orange p-2 text-xl font-bold shadow-[rgba(0,0,15,0.5)_-3px_10px_4px_0px]"
        >
          Ler Boletim Mensal
        </button>
      </div>
      <div className="flex w-full flex-col justify-center gap-5 text-right lg:justify-end">
        <h2 className="text-left">
          Registre Ocorrências de conflitos em seu território e receba apoio
          gratuito.
          <button
            type="submit"
            className="text-black ml-2 w-3/5 rounded-xl bg-orange p-2 text-xl shadow-[rgba(0,0,15,0.5)_-3px_10px_4px_0px]"
          >
            Acessar aplicativo aqui
          </button>
        </h2>
        <Image
          className="shadow-[rgba(0,0,15,0.5)_-10px_10px_4px_0px]"
          src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/dashboard-DAWr450K.png"
          alt="Dashboard"
          width={700}
          height={700}
        />
      </div>
    </div>
  );
}