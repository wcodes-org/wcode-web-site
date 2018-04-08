<div class="message alt_div_shade">
	<div id='basis'>
		<span id='basis_image' class='image' title='WCode basis'><?php echo file_get_contents('../../Resource/Basis.svg'); ?></span>
	</div>
	<div id='what'>
	<h2><span class='bullet'>&#8226;</span>what</h2>
	<div class='indent-60'>
		<span>Communicate digital information using simple words.</span>
	</div>
	<div id='codes-example'>
		<div class="indent-60" id='codes-table-label'>Below, each symbolize the same data; The bottom one: words enclosed by slashes, is the equivalent WCode</div>
		<div id='codes-table'>
			<div id='codes-table-top' class='blue'>one two three four five six</div>
			<div id='codes-table-mid'>
				<div><div class='code'><span id='bar-code' class='image' title='Bar Code : Rectangle with black bars'><?php echo file_get_contents('../../Resource/Bar_code.svg'); ?></span></div></div>
				<div><div class='blue'>1 2 3 4 5 6</div></div>
				<div><div><span id='qr-code' class='image' title='QR Code : Square with black blocks'><?php echo file_get_contents('../../Resource/QR_code.svg'); ?></span></div></div>
			</div>
			<div id='codes-table-bottom' class='blue code_value'>\ cat apple mango tomato /</div>
		</div>
	</div>
	</div>
	<div id='where'>
	<h2><span class='bullet'>&#8226;</span>where</h2>
		<div class='indent-60'>
			WCode is to be used when a human needs to relay computer data from one to another <em><span class='blue'>manually</span></em>.
			<div>
				Like when exchanging email addresses, mobile numberes or GPS co-coordinates by speech or writing </li>
			</div>
		</div>
		<p>
			<div class="center">
				<img src="/resource/general-use_case.png" alt="WCode general use-case" />
			</div>
		</p>
	</div>
	<div id='why'>
	<h2><span class='bullet'>&#8226;</span>why</h2>
	<div class='indent-60'>
		Comparatively, WCodes are:
		<ul class='list-dash'>
			<li>
				<details>
					<summary><em><strong>shorter</strong></em> – means lesser number of words. Since <span class='blue'>1</span> when spoken, is again a word: <span class='blue'>&lsquo;one&rsquo;</span></summary>
					<div class='indent-32'>
						As in the example above:
						<div id='comparison-table'>
							<span class='tbl-col'>
								<div class='cell'><em>Original</em></div>
								<div class='cell'><em>WCode</em></div>
							</span>
							<span class='tbl-col'>
								<div class='cell'><span> – </span><span class='t-size'>6</span><span class='t-type'> digits </div>
								<div class='cell'><span> – </span><span class='t-size'>4</span><span class='t-type'> nouns </div>
							</span>
							<span class='tbl-col indent-10'>
								<div class='blue'><span class='blue t-data'>1</span><span class='blue t-data'>2</span><span class='blue t-data'>3</span><span class='blue t-data'>4</span><span class='blue t-data'>5</span><span class='blue t-data'>6</div>
								<div class='blue'><span class='blue t-data'>Cat</span><span class='blue t-data'>Apple</span><span class='blue t-data'>Mango</span><span class='blue t-data'> Tomato </div>
							</span>
						</div>
					</div>
				</details>
			</li>
			<li>
				<details>
					<summary><em><strong>simpler</strong></em> – thus unambiguous and easier to communicate and memorize</summary>
					<div class='indent-32'>
						Digits and symbols like : <span class='blue'>1</span>, <span class='blue'>@</span>, <span class='blue'>_</span> are replaced with common words.<br>
						Even complex datasets like : <span class='blue'>27°59'17'N 86°55'31'E</span> get transformed to a bunch of simple words.<br>
					</div>
				</details>
			</li>
			<li>
				<details>
					<summary><em><strong>safer</strong></em> – ensures accuracy and privacy</summary>
					<div class='indent-32'>
						The chances of making a mistake are reduced.<br>
						Additionally checksum and encryption are supported.<br>
					</div>
				</details>
			</li>
		</ul>
	</div>
	</div>
	<div id='how'>
	<h2><span class='bullet'>&#8226;</span>how</h2>
	<div class='indent-60'>
		<ol>
			<li>In the WCode app select the <span class='blue'>data</span> mode</li>
			<li>Enter your mobile number and generate the corresponding <em>unique</em> WCode</li>
		</ol>
	</div>
			<div class="center">
				<div class='comics-column'>
					<img src="/resource/comics_1.png" alt="WCode number example - comics" />
					<img src="/resource/comics_2.png" alt="WCode number example - comics" />
				</div>
			</div>
	<div class='indent-60'>
		<ol start='3'>
			<li>On the reciever's app, select the <span class='blue'>code</span> mode</li>
			<li>Enter the WCode that was generated earlier and decode</li>
		</ol>
	</div>
			<div class="center">
				<div class='comics-column'>
					<img src="/resource/comics_3.png" alt="WCode number example - comics" />
					<img src="/resource/comics_4.png" alt="WCode number example - comics" />
				</div>
			</div>
	<div class='indent-60'>
		<ol start='5'>
			<li>Decode and voilà &mdash; your phone should now ring</li>
		</ol>
		<div id='wcode-remember'>
			* Your unique WCode remains same. You can always get it from the app but its best to memorize</div>
		</div>
	</div>
</div>
<!--
	<p class='no-margin'>
		Like barcodes, a WCode represents digital data;
		Only, instead of geometrical figures like bars and blocks, it's made of literal words.
	</p>
	<img src='/lg_example.png' alt='Example: \ Cat Apple Mango /' />
-->
