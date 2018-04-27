<div id='message'>
	<ul class="content-list">
		<li>
			<div class="content-li-title">Print</div>
			<div>
				<ol class="content-list-2">
					<li>
						<span>
							Begin with a back-slash { <strong>\</strong> }<br>
							End with forward-slash { <strong>/</strong> }<br>
							These can be dashed &ndash; with two breaks in between: <span><?php echo file_get_contents('..\..\Resource\Broken_Slash.svg') ?></span>
						</span>
					</li>
					<li>
						<span>
							High Contrast &mdash; Bi-colour<br>
							preferably Black &amp; White.
						</span>
					<li>
						<span>
							Enclose in a rectangle<br>
							with 'Dash&ndash;Dot' border style
						</span>
					</li>
					<li>
						<span>
							Title Case<br>
							e.g. '<strong>A</strong>pple' '<strong>M</strong>ango'
						</span>
					</li>
					<li>
						<span>
							OCR friendly Font like
							<a class="content-link" href="http://en.wikipedia.org/wiki/OCR-A_font" target="_blank">OCR-A</a>,
							<a class="content-link" href="http://en.wikipedia.org/wiki/OCR-B" target="_blank">OCR-B</a> &amp;
							<a class="content-link" href="http://fontzone.net/font-details/OCR+A+Extended/" target="_blank">OCR-A Extended</a> (free)
							<br>
							with fixed width (mono-spaced) glyphs
						</span>
					</li>
				</ol>
			</div>
		</li>
		<li>
			<div class="content-li-title">Voice</div>
			<div>
				<table class="voice-com-table">
					<tbody>
						<tr>
							<th></th>
							<th>Intent:</th>
							<th>Code:</th>
							<th>Description:</th>
						<tr>
							<td>1.</td>
							<td>Ready</td>
							<td>ready</td>
							<td></td>
						</tr>
						<tr>
							<td>2.</td>
							<td>Acknowledge</td>
							<td>copy</td>
							<td></td>
						</tr>
						<tr>
							<td>3.</td>
							<td>Begin</td>
							<td>start</td>
							<td></td>
						</tr>
						<tr>
							<td>4.</td>
							<td>End</td>
							<td>end</td>
							<td></td>
						</tr>
						<tr>
							<td>5.</td>
							<td>Interrupt</td>
							<td>pause</td>
							<td></td>
						</tr>
						<tr>
							<td>6.</td>
							<td>Continue</td>
							<td>resume</td>
							<td></td>
						</tr>
						<tr>
							<td>7.</td>
							<td>Repeat</td>
							<td>repeat</td>
							<td></td>
						</tr>
						<tr>
							<td>8.</td>
							<td>Terminate</td>
							<td>cancel</td>
							<td></td>
						</tr>
					</tbody>
				</table>
			</div>
		</li>
		<li>
			<div class="content-li-title">Logographic</div>
				<ol class="content-list-2">
					<li>
						<span>
							Begin with a back-slash { <strong>\</strong> }<br>
							End with forward-slash { <strong>/</strong> }<br>
							These should be dashed &ndash; with two breaks inbetween: <?php echo file_get_contents('..\..\Resource\Broken_Slash.svg') ?>
						</span>
					</li>
					<li>
						<span>
							Use vector images<br>
							like SVG
						</span>
					</li>
					<li>
						<span>
							Should not be colour relient<br>
							monochrome logographs should be easily distinguishable
						</span>
					</li>
					<li>
						<span>
							Minimalistic graphic design.
						</span>
					</li>
				</ol>
		</li>
	</ul>
</div>
<?php require('..\HTML\Fragment\Component_bottom_nav.php') ?>
