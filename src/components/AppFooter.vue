<template>
  <mdb-footer class="page-footer font-small pt-4 mt-4">
    <div class="text-center py-3">
      <ul class="list-unstyled list-inline mb-0">
        <li class="list-inline-item">
          <h5 class="mb-1 mr-4">Partez à la découverte de G4</h5>
        </li>
        <li class="list-inline-item"><a href="https://www.institut-g4.fr/" class="btn btn-rounded purple-gradient">Institut G4</a></li>
      </ul>
    </div>
    <div class="text-center">
      <ul class="list-unstyled list-inline">
        <li class="list-inline-item"><a href="https://www.facebook.com/InstitutG4/" class="btn-floating btn-sm btn-fb mx-1"><i class="fab fa-facebook"> </i></a></li>
        <li class="list-inline-item"><a href="https://www.linkedin.com/company/institut-g4" class="btn-floating btn-sm btn-tw mx-1"><i class="fab fa-twitter"> </i></a></li>
        <li class="list-inline-item"><a href="https://twitter.com/G4formation" class="btn-floating btn-sm btn-li mx-1"><i class="fab fa-linkedin-in"> </i></a></li>
      </ul>
    </div>
    <div class="footer-copyright text-center py-3">
      <mdb-container fluid>
        &copy; 2020 Copyright: Samy G4
      </mdb-container>
    </div>
  </mdb-footer>
</template>

<script>
export default {

}
</script>

<style scoped>
.btn-rounded {
    border-radius: 10em;
}

.btn-fb {
    color: #fff !important;
    background-color: #3b5998 !important;
}

.btn-tw {
    color: #fff !important;
    background-color: #55acee !important;
}

.btn-li {
    color: #fff !important;
    background-color: #0082ca !important;
}

.btn-floating {
    position: relative;
    z-index: 1;
    display: inline-block;
    padding: 0;
    margin: 10px;
    overflow: hidden;
    vertical-align: middle;
    cursor: pointer;
    border-radius: 50%;
    -webkit-box-shadow: 0 5px 11px 0 rgba(0,0,0,0.18), 0 4px 15px 0 rgba(0,0,0,0.15);
    box-shadow: 0 5px 11px 0 rgba(0,0,0,0.18), 0 4px 15px 0 rgba(0,0,0,0.15);
    -webkit-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
    width: 47px;
    height: 47px;
}
.btn-floating i {
    font-size: 1.25rem;
    line-height: 47px;
}

.page-footer {
    background: #f4f5f7 !important;
    color: #32325d;
}
</style>