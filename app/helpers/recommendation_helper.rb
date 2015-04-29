module RecommendationHelper

  # Creates a hash of all possible company pairs, generates all possible PAIRS.
  def combinations_of(input)
    pair_combinations, i = {},0
      input.each do |row|
        i += 1
        row_number = "row_" + i.to_s
        combo_row = row.combination(2).to_a
        pair_combinations[row_number] = combo_row
      end
    return pair_combinations
  end

  # Checks number of co-occurrences for each pair against USER specified N.
  def check_n_against(input, n)
    greater_equal_n = input.delete_if {|key, value| value < n}
    sorted_pairs = greater_equal_n.sort.flatten(1)
    trimmed_pairs = sorted_pairs.delete_if{|i| i.is_a? Integer}
    return trimmed_pairs
  end	

  # ***					           ***
  # *** ACTION STARTS HERE ***
  # *** 					         ***

  # PASS A BLOCK OF DATA TO THIS METHOD TO START THE ALGORITHM
  # Checks file arguments in command line, if none, accepts stdin from terminal.
  def recommendations_of(block)
    # Parses and pushes input to occurrences array.
    occurrences, n 	= [],0
    block.each_line do |line|
      sentence = line.chomp.split(",") 
       	# Searches for number N at the beginning of input and sets it to n.
    	if line.match(/\d/)    
      	  n = line.to_i
    	end
      occurrences.push(sentence)
    end

    pair_array = combinations_of(occurrences) 

    # Finds NUMBER OF CO-OCCURRENCES for every possible pair of occurrences.
      cooccurrences, row_counter = {},0

      # Row of pairs [[Company, Company],[Company, Company]]
      for row in pair_array	
    	row_counter += 1

    	# Single Pair [Company, Company]
    	for pair in pair_array["row_#{row_counter}"]  	
    	  times, inner_counter = 0,0

        # Checks PAIR against occurrences against every ROW
    	  for row in pair_array
    		inner_counter += 1
      		# Ticker for each time pair comes up
      		if pair_array["row_#{inner_counter}"].include? pair 
      			times += 1
      		end
    	  end
    	  # Pushes pair and times co-occurring to cooccurrences array.
    	  cooccurrences.store(pair, times) 
    	end
    end
    ### 

    results = check_n_against(cooccurrences, n)

    # Inits output array, formats results properly with UNIX newlines.
    output = []
    for i in results
    	output.push(i.join(",")+"\n")
    end

    # Standard output as stdout to terminal and writes to file if second filename specified.
    return output
  end
end