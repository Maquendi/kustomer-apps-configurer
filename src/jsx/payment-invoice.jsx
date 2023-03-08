<div style={{ padding: '10px' }}>
     {(()=> {
       const customerName = _.get(customer, 'name')
         
         return(
           <>
             <div>Here is you output {customerName}</div>
           </>
         )
     })()}
</div>