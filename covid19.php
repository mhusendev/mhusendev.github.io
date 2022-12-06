

<?php
$url = "https://api.kawalcorona.com/indonesia/";
$url2 = "https://api.kawalcorona.com/indonesia/provinsi";



$data = file_get_contents($url);
$data2 = file_get_contents($url2);

$json = json_decode($data,1);
$m=$json['0']['meninggal'];
$s=$json['0']['sembuh'];
$p=$json['0']['positif'];



?>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <title>Data Update Covid Indonesia</title>
</head>
<body style="background: #101210; padding: 50px;">
<div class="row">
    <div class="col-md-12 col-sm-3">
        <h1 style="margin-top: 3% ;color: #fff"><center>Data Kasus Covid-19 di Indonesia</center></h1>
    </div>
</div>
<div class="row" style="margin-top: 3%;">
    <div class="col-md-3 col-sm-3" style="background: #f01e1a">
        <center><h2 style="color: #fff"> Kematian </h2></center>
      
    </div>
    <div class="col-md-1 col-sm-1" >
        
      
    </div>
    <div class="col-md-4 col-sm-4" style="background:#ffa526">
        <center><h2 style="color: #fff"> Positif </h2></center>
      
    </div>

     <div class="col-md-1 col-sm-1" >
        
      
    </div>

    <div class="col-md-3 col-sm-3" style="background: #58f21f">
        <center><h2 style="color: #fff"> Sembuh </h2></center>
      
    </div>

</div>

<div class="row" style="margin-top: 2%;">
    <div class="col-md-3 col-sm-3" style="background: #fff">
        <center><h2 > <?php echo $m ?> Orang </h2></center>
      
    </div>
    <div class="col-md-1 " >
        
      
    </div>
    <div class="col-md-4 col-sm-3" style="background:#fff">
        <center><h2> <?php echo $p ?> Orang  </h2></center>
      
    </div>

     <div class="col-md-1 " >
        
      
    </div>

    <div class="col-md-3 col-sm-3 col-xs-12" style="background: #fff">
        <center><h2> <?php echo $s ?> Orang  </h2></center>
      
    </div>

</div>
<div class="row" style="margin-top: 3%;">
    <div class="col-md-12 col-sm-12 col-xs-12">
        <center><h2 style="color: #fff">Data Provinsi</h2></center><br>
        <table class="table table-dark">
  <thead>
  
 
    <tr>
      <th scope="col">Provinsi</th>
      <th scope="col">Positif</th>
      <th scope="col">Sembuh</th>
      <th scope="col">Kematian</th>
    </tr>
  </thead>
  <tbody><?php
$json2 = json_decode($data2,"attributes");


for ($i=0; $i < 19; $i++) { 
    $pv = $json2[$i]['attributes']['Provinsi'];
        $kp = $json2[$i]['attributes']['Kasus_Posi'];
            $ks = $json2[$i]['attributes']['Kasus_Semb'];
                $km = $json2[$i]['attributes']['Kasus_Meni'];
    



?>
    <tr>
      
      <td><?php echo    $pv; ?></td>
      <td><?php echo $kp; ?></td>
        <td><?php echo $ks; ?></td>
          <td><?php echo $km; ?></td>
      
    </tr>
  <?php 

}
   ?>
    
  </tbody>
</table>

    </div>
</div>
<div class="row">
    <div class="col-md-12 col-sm-12">
    <<center><h2 style="color: #fff">Data Bekasi</h2></center><br>
        <iframe src="https://gis.bekasikota.go.id/covid19-kota-bekasi/"  style="width: 100%; height: 800px"></iframe>

    </div>

</div>
<div class="row">
    <div class="col-md-12 col-sm-3">
        <h1 style="margin-top: 3% ;color: #fff"><center>Dev by : Muhammad Husen </center></h1>
    </div>
</div>
</body>
</html>