import React from 'react';
import './generaLegajo.css';
import Pdf from "react-to-pdf";
import Cookies from 'universal-cookie';
import {useNavigate} from 'react-router-dom';
import devuelveDepartamento from './devuelveDepartamento';
import devuelveProvincia from './devuelveProvincia';
import regresaBienFecha from './regresaBienFecha';
const cookies=new Cookies();

function Legajo() {
    const ref = React.createRef();
    const fecha= cookies.get('fecha', {path:"/"})
   
   /* */
   const navitate = useNavigate()
   const nombreArchivo = 'Informe de Inscriptos '+fecha +".pdf";
      const volver=()=>
      {    
        navitate('/usuarioLogueado')
      }


      return (
      <div className="Legajo">
      
  <div ref={ref}>
    <div className='hojaLegajo'>
  <div className='titulo_legajo'>

    


  </div> 
  
  <div className='datosPersonales_legajo'>
  <hr />
    <div className='titulo_legajo'>Proceso de Inscripción Técnico Superior en Seguridad Pública</div>
    <div className='titulo_año'>Año 2023 2do Tramo</div>
    <hr/>
    <div className='contenedor_genero'>
    <h2>A las {fecha} horas se registran {cookies.get('cantidad',{path:"/"})} inscríptos
totales.</h2>
          <h3 className="edit__sub-title">Cantidad de Postulantes Inscriptos por género: </h3>
          <h3 className="edit__sub-title">Femeninos: {cookies.get('femeninos',{path:"/"})}</h3>
          <h3 className="edit__sub-title">Masculinos : {cookies.get('masculinos',{path:"/"})}</h3>
          <h3 className="edit__sub-title">X : {cookies.get('X',{path:"/"})}</h3>
          <h3 className="edit__sub-title"></h3>
          <hr/>
          </div>
    <div className='contenedor_tabla'></div>
    <h3 className="edit__sub-title">Cantidad de Postulantes Inscriptos por departamento: </h3>
          
         
         
<table className="tabla">
<tbody>
<tr>
<td className="tabla_columna_nombre">La Capital</td>
<td className="tabla_columna_cantidad">{cookies.get('LaCapital',{path:"/"})}</td>
</tr>
<tr>
<td className="tabla_columna_nombre">Rosario</td>
<td className="tabla_columna_cantidad">{cookies.get('Rosario',{path:"/"})}</td>
</tr>
<tr>
<td className="tabla_columna_nombre">Belgrano</td>
<td className="tabla_columna_cantidad">{cookies.get('Belgrano',{path:"/"})}</td>
</tr>
<tr>
<td className="tabla_columna_nombre">Caseros</td>
<td className="tabla_columna_cantidad">{cookies.get('Caseros',{path:"/"})}</td>
</tr>
<tr>
<td className="tabla_columna_nombre">Castellanos</td>
<td className="tabla_columna_cantidad">{cookies.get('Castellanos',{path:"/"})}</td>
</tr>
<tr>
<td className="tabla_columna_nombre">Constitución</td>
<td className="tabla_columna_cantidad">{cookies.get('Constitución',{path:"/"})}</td>
</tr>
<tr>
<td className="tabla_columna_nombre">Garay</td>
<td className="tabla_columna_cantidad">{cookies.get('Garay',{path:"/"})}</td>
</tr>
<tr>
<td className="tabla_columna_nombre">General Lopez</td>
<td className="tabla_columna_cantidad">{cookies.get('GeneralLopez',{path:"/"})}</td>
</tr>
<tr>
<td className="tabla_columna_nombre">General Obligado</td>
<td className="tabla_columna_cantidad">{cookies.get('GeneralObligado',{path:"/"})}</td>
</tr>
<tr>
<td className="tabla_columna_nombre">Las Colonias</td>
<td className="tabla_columna_cantidad">{cookies.get('LasColonias',{path:"/"})}</td>
</tr>
<tr>
<td className="tabla_columna_nombre">Nueve de Julio</td>
<td className="tabla_columna_cantidad">{cookies.get('NueveDeJulio',{path:"/"})}</td>
</tr>
<tr>
<td className="tabla_columna_nombre">San Cristobal</td>
<td className="tabla_columna_cantidad">{cookies.get('SanCristobal',{path:"/"})}</td>
</tr>
<tr>
<td className="tabla_columna_nombre">Castellanos</td>
<td className="tabla_columna_cantidad">{cookies.get('Castellanos',{path:"/"})}</td>
</tr>
<tr>
<td className="tabla_columna_nombre">San Javier</td>
<td className="tabla_columna_cantidad">{cookies.get('SanJavier',{path:"/"})}</td>
</tr>
<tr>
<td className="tabla_columna_nombre">San Jeronimo</td>
<td className="tabla_columna_cantidad">{cookies.get('SanJeronimo',{path:"/"})}</td>
</tr>
<tr>
<td className="tabla_columna_nombre">San Justo</td>
<td className="tabla_columna_cantidad">{cookies.get('SanJusto',{path:"/"})}</td>
</tr>
<tr>
<td className="tabla_columna_nombre">San Lorenzo</td>
<td className="tabla_columna_cantidad">{cookies.get('SanLorenzo',{path:"/"})}</td>
</tr>
<tr>
<td className="tabla_columna_nombre">San Martin</td>
<td className="tabla_columna_cantidad">{cookies.get('SanMartin',{path:"/"})}</td>
</tr>
<tr>
<td className="tabla_columna_nombre">Vera</td>
<td className="tabla_columna_cantidad">{cookies.get('Vera',{path:"/"})}</td>
</tr>
</tbody>
</table>
    </div> <hr/> 
    <div className="form__footer">
          <h4 className='form__footer'>DTyD 2023 sistemas@isepsantafe.edu.ar</h4>
        </div><hr/>
    </div>
  </div>
  <div className='botonera_imprimir'>
  <Pdf targetRef={ref} filename={nombreArchivo}>
    {({ toPdf }) => <button onClick={toPdf} className='botton_Imprime'>Guardar Legajo</button>}
  </Pdf>
  <button onClick={volver} className='botton_Volver'>Volver</button>
      </div></div>
    );
      }
export default Legajo