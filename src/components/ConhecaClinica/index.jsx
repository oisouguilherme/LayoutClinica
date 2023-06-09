import Medico from '../../assets/medica.jpg'

export function ConhecaClinica(){
  return(
    <div className='flex flex-wrap gap-4 justify-around items-center py-12 px-4 text-center md:text-start'>
      <img className='w-[500px] shadow-xl' src={Medico} alt="" />

      <div className='w-[500px] space-y-4'>
        <h2 className='text-4xl font-bold text-mainVerde'>Conheça a sua clínica</h2>
        <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, amet rerum mollitia, soluta impedit officia inventore laborum temporibus atque maiores voluptas sed tenetur, sequi eius repellendus excepturi. Maxime, dolorem sed.</p>

        <p className='text-lg font-bold pb-6 text-mainAmarelo'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>

        <a href="#" className='bg-mainVerde hover:bg-opacity-80 duration-300 px-12 py-3 text-white font-bold shadow-xl rounded-md'>Saiba mais</a>
      </div>
    </div>
  )
}