import{a as f,k as c}from"./q-0dce7f5a.js";const b=(e={})=>{const[r,m,o,s]=f();let t,a;return e instanceof SubmitEvent?(a=e.target,t=new FormData(a),(e.submitter instanceof HTMLInputElement||e.submitter instanceof HTMLButtonElement)&&e.submitter.name&&e.submitter.name&&t.append(e.submitter.name,e.submitter.value)):t=e,new Promise(n=>{t instanceof FormData&&(s.formData=t),s.isRunning=!0,o.isNavigating=!0,r.value={data:t,id:m,resolve:c(n)}}).then(({result:n,status:i})=>{if(s.isRunning=!1,s.status=i,s.value=n,a){a.getAttribute("data-spa-reset")==="true"&&a.reset();const l={status:i,value:n};a.dispatchEvent(new CustomEvent("submitcompleted",{bubbles:!1,cancelable:!1,composed:!1,detail:l}))}return{status:i,value:n}})};export{b as s_A5bZC7WO00A};
