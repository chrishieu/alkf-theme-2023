<div class="alkf_career_section alkf_career_sec_7 reveal">
  <div class="text pd_top277">
    <div class="perks_title">
      <p><?php echo $attributes['title']; ?></p>
    </div>
    <div class="perks_desc">
      <?php if(array_key_exists('isList', $attributes) && $attributes['isList']): ?>
      <ul>
        <li><?php echo str_replace('<br>', '</li><li>', $attributes['content']); ?></li>
      </ul>
      <?php else:?>
        <ul>
          <li><?php echo $attributes['content']; ?></li>
        </ul>
      <?php endif; ?>
    </div>
  </div>
</div>