<div id='sub-list' class='center'>
<?php
  $memIDs = getSubComponents($id);
  foreach ($memIDs as $key => $value) {
?>
    <a class='XURL block' href='<?php echo '/'.$value[0] ?>' data-target='<?php echo $value[0] ?>' data-title='<?php echo $value[1] ?>'>
      <div><?php echo $value[1] ?></div>
    </a>
<?php
  }
  {
    if(count($memIDs) > 5 && count($memIDs) % 5) {
      for($i = 5 - count($memIDs) % 5; $i > 0; $i--) {
      ?>
        <div class='sidebar-nav-norm placeholder-empty'></div>
      <?php
      }
    }
  }
?>
</div>